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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.oldPassword = '';
        this.newPassword = '';
        this.profileEdited = false;
        this.user = {};
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId;
        this.route.params.subscribe(function (params) {
            userId = params['id'];
        });
        this.userService.getUser(userId).subscribe(function (user) { return _this.user = user; });
    };
    ProfileSettingsComponent.prototype.onInfoSubmit = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function (user) {
            if (user) {
                _this.profileEdited = true;
            }
        });
    };
    ProfileSettingsComponent.prototype.onPasswordChange = function () {
        //TODO check this functionality
        this.user.oldPassword = this.oldPassword;
        this.user.newPassword = this.newPassword;
        this.userService.updateUser(this.user);
    };
    return ProfileSettingsComponent;
}());
ProfileSettingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "profile-settings",
        templateUrl: "profile-settings.component.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], ProfileSettingsComponent);
exports.ProfileSettingsComponent = ProfileSettingsComponent;
//# sourceMappingURL=profile-settings.component.js.map