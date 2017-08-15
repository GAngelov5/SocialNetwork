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
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
var NavigationBarComponent = NavigationBarComponent_1 = (function () {
    function NavigationBarComponent(authService, userService, messageService, router) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
        if (authService.loggedIn() && localStorage.getItem('currentUserId')) {
            this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            this.userService.getUser(this.currentUserId).subscribe(function (user) {
                if (user) {
                    _this.username = user.firstName + " " + user.lastName;
                }
            });
        }
        else {
            this.username = "Guest";
        }
        this.unreadMessages = 0;
        NavigationBarComponent_1.returned.subscribe(function (res) {
            if (res) {
                _this.username = res.firstName + " " + res.lastName;
                if (localStorage.getItem('currentUserId')) {
                    _this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
                }
                _this.messageService.getUserUnreadMessages(_this.currentUserId).subscribe(function (data) {
                    console.log('bj');
                    console.log(data);
                    _this.unreadMessages = data ? data.length : 0;
                });
                _this.socket = io('http://localhost:3000');
                _this.socket.on("new msg incoming", function (data) {
                    if (data && _this.currentUserId === data.sent_to) {
                        console.log("bravo be doide ");
                        _this.unreadMessages += 1;
                    }
                });
            }
        });
    }
    NavigationBarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationBarComponent.prototype.goToProfile = function () {
        if (this.currentUserId) {
            this.router.navigate(['/profile', this.currentUserId]);
        }
    };
    return NavigationBarComponent;
}());
NavigationBarComponent.returned = new Subject();
NavigationBarComponent = NavigationBarComponent_1 = __decorate([
    Component({
        selector: "nav-bar",
        templateUrl: "navigationbar.component.html"
    }),
    __metadata("design:paramtypes", [AuthenticationService,
        UserService,
        MessageService,
        Router])
], NavigationBarComponent);
export { NavigationBarComponent };
var NavigationBarComponent_1;
//# sourceMappingURL=navigationbar.component.js.map