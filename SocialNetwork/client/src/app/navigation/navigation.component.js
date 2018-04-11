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
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { MessageService } from '../messages/shared/message.service';
import { ChatService } from '../shared/services/chat.service';
import { Subject } from 'rxjs/Subject';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, userService, messageService, chatService, router) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.messageService = messageService;
        this.chatService = chatService;
        this.router = router;
        if (authService.loggedIn() && localStorage.getItem('currentUserId')) {
            this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            var token = localStorage.getItem('user_token');
            this.chatService.createIoConnection(token);
            this.userService.getUser(this.currentUserId).subscribe(function (user) {
                if (user) {
                    _this.username = user.firstName + " " + user.lastName;
                }
            });
        }
        else {
            this.username = "Guest";
        }
        NavigationComponent_1.returned.subscribe(function (res) {
            if (res) {
                _this.username = res.firstName + " " + res.lastName;
                if (localStorage.getItem('currentUserId')) {
                    _this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
                }
                _this.getMessageStatus();
            }
        });
        if (this.currentUserId) {
            this.getMessageStatus();
        }
        this.listenForMessageUpdates();
    }
    NavigationComponent_1 = NavigationComponent;
    NavigationComponent.prototype.getMessageStatus = function () {
        var _this = this;
        this.messageService.getUserUnreadMessages(this.currentUserId).subscribe(function (data) {
            _this.unreadMessages = data ? data.length : 0;
        });
        this.chatService.checkIncomingMessages().subscribe(function (data) {
            if (data && _this.currentUserId === data.sent_to) {
                _this.unreadMessages += 1;
            }
        });
    };
    NavigationComponent.prototype.listenForMessageUpdates = function () {
        var _this = this;
        this.chatService.getIncomingMessages().subscribe(function (data) {
            _this.unreadMessages = data ? data : _this.unreadMessages;
        });
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationComponent.prototype.goToProfile = function () {
        if (this.currentUserId) {
            this.router.navigate(['/profile', this.currentUserId]);
        }
    };
    NavigationComponent.returned = new Subject();
    NavigationComponent = NavigationComponent_1 = __decorate([
        Component({
            selector: "navigation",
            templateUrl: "navigation.component.html",
            styleUrls: ['navigation.component.css']
        }),
        __metadata("design:paramtypes", [AuthenticationService,
            UserService,
            MessageService,
            ChatService,
            Router])
    ], NavigationComponent);
    return NavigationComponent;
    var NavigationComponent_1;
}());
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map