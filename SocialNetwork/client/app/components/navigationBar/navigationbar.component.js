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
var authentication_service_1 = require('../../services/authentication.service');
var user_service_1 = require('../../services/user.service');
var NavigationBarComponent = (function () {
    function NavigationBarComponent(authenticationService, userService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        this.userService.getUser(this.currentUserId).subscribe(function (user) {
            if (user) {
                _this.setLabels(user.firstName, "Logout");
            }
            else {
                _this.setLabels("Guest", "Login");
            }
        });
    }
    NavigationBarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    NavigationBarComponent.prototype.setLabels = function (name, loginLabel) {
        this.name = name;
        this.loginLabel = loginLabel;
    };
    NavigationBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "nav-bar",
            templateUrl: "navigationbar.component.html",
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, user_service_1.UserService])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;
//# sourceMappingURL=navigationbar.component.js.map