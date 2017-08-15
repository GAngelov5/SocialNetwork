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
import { Router } from "@angular/router";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from '../../node_modules/angular2-jwt';
import * as io from 'socket.io-client';
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var bodyString = JSON.stringify({ username: username, password: password }); // Stringify payload
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/authenticate', bodyString, { headers: headers })
            .map(function (res) {
            var response = res.json();
            if (response && response.token) {
                localStorage.setItem('currentUserId', JSON.stringify(response.user.id));
                localStorage.setItem('user_token', response.token);
                _this.socket = io('http://localhost:3000');
                _this.socket.emit("new authentication", (response.user.id));
            }
            return response;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('user_token');
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.grantAccess = function (userId) {
        var loggedUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (!loggedUserId || !userId)
            return false;
        return loggedUserId === userId;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return tokenNotExpired("user_token");
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Router])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map