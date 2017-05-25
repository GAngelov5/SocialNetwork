import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

const PASSWORD_MISMATCH = "New password mismatch with the confirm password!";

@Component({
    selector: "profile-settings",
    templateUrl: "profile-settings.component.html"
})
export class ProfileSettingsComponent {
    @Input()
    public user: any;
    @Output()
    public profileEmitter = new EventEmitter<any>();

    public passwordForm: FormGroup;
    public settingsForm: FormGroup;


    constructor(private userService:UserService,
                private flashService: FlashMessagesService,
                private formBuilder: FormBuilder) {
        this.createSettingsForm();
        this.createPasswordForm();
    }

    ngOnChanges() {
        this.settingsForm.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            address: this.user.address,
            phone: this.user.phone,
            company: this.user.company,
            position: this.user.position
        })
    }

    editProfileSettings() {
        this.user.firstName = this.settingsForm.get('firstName').value;
        this.user.lastName = this.settingsForm.get('lastName').value;
        this.user.address = this.settingsForm.get('address').value;
        this.user.phone = this.settingsForm.get('phone').value;
        this.user.company = this.settingsForm.get('company').value;
        this.user.position = this.settingsForm.get('position').value;
        this.profileEmitter.emit(this.user);
    }

    createSettingsForm() {
        this.settingsForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            company: '',
            position: ''
        })
    }

    createPasswordForm() {
        this.passwordForm = this.formBuilder.group({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        })
    }

    changePassword() {
        if (this.passwordForm.get('newPassword').value !== 
            this.passwordForm.get('confirmPassword').value) {
            this.flashService.show(PASSWORD_MISMATCH, {cssClass: 'alert-danger', timeout: 3000});
        } else {
            let partialUser = {
                id: this.user._id,
                oldPassword: this.passwordForm.get('oldPassword').value,
                newPassword: this.passwordForm.get('newPassword').value
            }
            this.userService.changeUserPassword(partialUser).subscribe((data) => {
                if (data.success) {
                    this.flashService.show(data.msg, 
                        {cssClass: 'alert-success', timeout: 3000});
                } else {
                    this.flashService.show(data.msg, 
                        {cssClass: 'alert-danger', timeout: 3000});
                }
            })
        }
    }

}