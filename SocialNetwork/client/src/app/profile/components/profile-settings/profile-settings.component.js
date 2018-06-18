var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
var PASSWORD_MISMATCH = "New password mismatch with the confirm password!";
var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent(userService, flashService, formBuilder) {
        this.userService = userService;
        this.flashService = flashService;
        this.formBuilder = formBuilder;
        this.profileEmitter = new EventEmitter();
        this.createSettingsForm();
        this.createPasswordForm();
    }
    ProfileSettingsComponent.prototype.ngOnChanges = function () {
        this.settingsForm.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            address: this.user.address,
            phone: this.user.phone,
            company: this.user.company,
            position: this.user.position
        });
    };
    ProfileSettingsComponent.prototype.editProfileSettings = function () {
        this.user.firstName = this.settingsForm.get('firstName').value;
        this.user.lastName = this.settingsForm.get('lastName').value;
        this.user.address = this.settingsForm.get('address').value;
        this.user.phone = this.settingsForm.get('phone').value;
        this.user.company = this.settingsForm.get('company').value;
        this.user.position = this.settingsForm.get('position').value;
        this.profileEmitter.emit(this.user);
    };
    ProfileSettingsComponent.prototype.createSettingsForm = function () {
        this.settingsForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            company: '',
            position: ''
        });
    };
    ProfileSettingsComponent.prototype.createPasswordForm = function () {
        this.passwordForm = this.formBuilder.group({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };
    ProfileSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.passwordForm.get('newPassword').value !==
            this.passwordForm.get('confirmPassword').value) {
            this.flashService.show(PASSWORD_MISMATCH, { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            var partialUser = {
                id: this.user._id,
                oldPassword: this.passwordForm.get('oldPassword').value,
                newPassword: this.passwordForm.get('newPassword').value
            };
            this.userService.changeUserPassword(partialUser).subscribe(function (data) {
                if (data.success) {
                    _this.flashService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProfileSettingsComponent.prototype, "user", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ProfileSettingsComponent.prototype, "profileEmitter", void 0);
    ProfileSettingsComponent = __decorate([
        Component({
            selector: "profile-settings",
            templateUrl: "profile-settings.component.html"
        }),
        __metadata("design:paramtypes", [UserService,
            FlashMessagesService,
            FormBuilder])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());
export { ProfileSettingsComponent };
//# sourceMappingURL=profile-settings.component.js.map