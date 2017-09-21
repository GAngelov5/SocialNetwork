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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post('http://localhost:3000/api/users/user', user)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (userId) {
        return this.http.get('http://localhost:3000/api/users/user/' + userId)
            .catch(function (err) {
            return Observable.of(null);
        });
    };
    UserService.prototype.getFollowing = function (following) {
        var users = [];
        for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
            var userId = following_1[_i];
            this.getUser(userId).subscribe(function (user) { return users.push(user); });
        }
        return users;
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/users/user/' + user._id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.changeUserPassword = function (partialUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/changePassword', partialUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.followUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/follow', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.unfollowUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/unfollow', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.subscribeUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/subscribe', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.unsubscribeUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/unsubscribe', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map