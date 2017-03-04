import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: "profile-settings",
    templateUrl: "profile-settings.component.html"
})
export class ProfileSettingsComponent implements OnInit{
    user: any;
    oldPassword: string;
    newPassword: string;
    profileEdited: boolean;

    constructor(private userService:UserService,
                private route: ActivatedRoute,
                private router: Router) {
        this.oldPassword = '';
        this.newPassword = '';
        this.profileEdited = false;
        this.user = {};
    }

    ngOnInit() {
        let userId: string;
        this.route.params.subscribe(params => {
            userId = params['id'];
        });

        this.userService.getUser(userId).subscribe(user => this.user = user);
    }

    onInfoSubmit() {
        this.userService.updateUser(this.user).subscribe(user => {
            if(user) {
                this.profileEdited = true;
            }
        });
    }

    onPasswordChange() {
        //TODO check this functionality
        this.user.oldPassword = this.oldPassword;
        this.user.newPassword = this.newPassword;
        this.userService.updateUser(this.user);
    }
}