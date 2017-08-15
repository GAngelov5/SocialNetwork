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
import { Http } from '@angular/http';
import { MessageService } from '../../services/message.service';
var MessagesComponent = (function () {
    function MessagesComponent(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.selected = 'unread';
        this.unreadMessages = [];
        this.readMessages = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.messageService.getUserMessages(currentUserId).subscribe(function (data) {
            if (data) {
                _this.unreadMessages = _this.filterUnreadMessages(data);
                _this.readMessages = _this.filterReadMessages(data);
            }
        });
    };
    MessagesComponent.prototype.filterUnreadMessages = function (allMessages) {
        return allMessages.filter(function (message) { return !message.read; });
    };
    MessagesComponent.prototype.filterReadMessages = function (allMessages) {
        return allMessages.filter(function (message) { return message.read; });
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Component({
        templateUrl: 'messages.component.html',
        styleUrls: ['messages.component.css']
    }),
    __metadata("design:paramtypes", [Http,
        MessageService])
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map