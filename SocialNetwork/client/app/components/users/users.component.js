var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../../services/user-management.service';
var UsersComponent = (function () {
    function UsersComponent(userService, userManagementService, router, route) {
        var _this = this;
        this.userService = userService;
        this.userManagementService = userManagementService;
        this.router = router;
        this.route = route;
        this.route.data.subscribe(function (data) {
            if (data && data['users']) {
                _this.currentUser = _this.getLoggedUser(data['users']);
                _this.users = _this.excludeLoggedUser(data['users']);
                _this.users.forEach(function (user) {
                    _this.userManagementService.followingCacheMap[user._id] =
                        _this.userManagementService.checkFollow(user._id, _this.currentUser);
                    _this.userManagementService.subscriptionCacheMap[user._id] =
                        _this.userManagementService.checkSubscription(user._id, _this.currentUser);
                });
            }
        });
    }
    UsersComponent.prototype.excludeLoggedUser = function (users) {
        return users.filter(function (user) {
            return user._id !== JSON.parse(localStorage.getItem('currentUserId'));
        });
    };
    UsersComponent.prototype.getLoggedUser = function (users) {
        return users.filter(function (user) {
            return user._id == JSON.parse(localStorage.getItem('currentUserId'));
        })[0];
    };
    UsersComponent.prototype.viewProfile = function (userId) {
        this.router.navigate(['/profile', userId]);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Component({
        selector: "list-users",
        templateUrl: "users.component.html",
        styleUrls: ['users.component.css']
    }),
    __metadata("design:paramtypes", [UserService,
        UserManagementService,
        Router,
        ActivatedRoute])
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map