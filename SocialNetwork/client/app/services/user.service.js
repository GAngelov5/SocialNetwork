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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post('api/users/user', user)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (userId) {
        // let params = new URLSearchParams();
        // params.set("id", userId);
        return this.http.get('api/users/user/' + userId)
            .map(function (res) { return res.json(); });
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/users/user/' + user._id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map