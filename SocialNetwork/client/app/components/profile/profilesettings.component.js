"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../../services/user.service');
var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent(userService) {
        this.userService = userService;
        this.oldPassword = '';
        this.newPassword = '';
    }
    ProfileSettingsComponent.prototype.onInfoSubmit = function () {
        this.userService.updateUser(this.user).subscribe(function (user) { return console.log(user); });
        this.userService.getUser(this.user._id).subscribe(function (user) { return console.log("GET " + user._id); });
    };
    ProfileSettingsComponent.prototype.onPasswordChange = function () {
        this.user.oldPassword = this.oldPassword;
        this.user.newPassword = this.newPassword;
        this.userService.updateUser(this.user);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProfileSettingsComponent.prototype, "user", void 0);
    ProfileSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "profile-settings",
            templateUrl: "profilesettings.component.html"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());
exports.ProfileSettingsComponent = ProfileSettingsComponent;
//# sourceMappingURL=profilesettings.component.js.map