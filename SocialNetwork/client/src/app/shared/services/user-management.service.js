var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
var UserManagementService = /** @class */ (function () {
    function UserManagementService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.followingCacheMap = {};
        this.subscriptionCacheMap = {};
    }
    UserManagementService.prototype.getFollowingCacheMap = function () {
        return this.followingCacheMap;
    };
    UserManagementService.prototype.getSubscriptionCacheMap = function () {
        return this.subscriptionCacheMap;
    };
    UserManagementService.prototype.followUser = function (userId) {
        var _this = this;
        var data = {
            userId: JSON.parse(localStorage.getItem("currentUserId")),
            followingUser: userId
        };
        this.userService.followUser(data).subscribe(function (user) {
            if (user) {
                _this.followingCacheMap[userId] = _this.checkFollow(userId, user);
            }
        });
    };
    UserManagementService.prototype.unfollowUser = function (userId) {
        var _this = this;
        var data = {
            userId: JSON.parse(localStorage.getItem("currentUserId")),
            followingUser: userId
        };
        this.userService.unfollowUser(data).subscribe(function (user) {
            if (user) {
                _this.followingCacheMap[userId] = _this.checkFollow(userId, user);
            }
        });
    };
    UserManagementService.prototype.subscribe = function (subscriberId) {
        var _this = this;
        this.userService.getUser(JSON.parse(localStorage.getItem("currentUserId"))).subscribe(function (user) {
            if (user) {
                var data = {
                    subscriberId: subscriberId,
                    userEmail: user.email,
                    userId: user._id
                };
                _this.userService.subscribeUser(data).subscribe(function (updatedUser) {
                    if (updatedUser) {
                        _this.subscriptionCacheMap[subscriberId] = _this.checkSubscription(subscriberId, updatedUser);
                    }
                });
            }
        });
    };
    UserManagementService.prototype.unsubscribe = function (subscriberId) {
        var _this = this;
        this.userService.getUser(JSON.parse(localStorage.getItem("currentUserId"))).subscribe(function (user) {
            if (user) {
                var data = {
                    subscriberId: subscriberId,
                    userEmail: user.email,
                    userId: user._id
                };
                _this.userService.unsubscribeUser(data).subscribe(function (updatedUser) {
                    if (updatedUser) {
                        _this.subscriptionCacheMap[subscriberId] = _this.checkSubscription(subscriberId, updatedUser);
                    }
                });
            }
        });
    };
    //unsubscribeCheck
    UserManagementService.prototype.checkFollow = function (userId, currentUser) {
        var following = currentUser.following.filter(function (followingId) {
            return followingId === userId;
        });
        return following.length > 0;
    };
    UserManagementService.prototype.checkSubscription = function (userId, currentUser) {
        var subscribed = currentUser.subscribedTo.filter(function (subscriber) {
            return subscriber === userId;
        });
        return subscribed.length > 0;
    };
    UserManagementService.prototype.messageUser = function (userId) {
        this.router.navigate(['/profile', userId, "Message"]);
    };
    UserManagementService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [UserService,
            Router])
    ], UserManagementService);
    return UserManagementService;
}());
export { UserManagementService };
//# sourceMappingURL=user-management.service.js.map