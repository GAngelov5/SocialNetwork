var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { MessageService } from '../shared/message.service';
import * as io from 'socket.io-client';
var MessageContainer = (function () {
    function MessageContainer(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    MessageContainer.prototype.ngOnInit = function () {
        var _this = this;
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (this.tab === 'unread') {
            this.messageService.getUserUnreadMessages(currentUserId).subscribe(function (data) {
                if (data) {
                    _this.messages = data;
                }
            });
        }
        else {
            this.messageService.getUserReadMessages(currentUserId).subscribe(function (data) {
                if (data) {
                    _this.messages = data;
                }
            });
        }
    };
    MessageContainer.prototype.readMessage = function (messageId) {
        var messageToUpdate = this.messages.find(function (msg) {
            return msg._id === messageId;
        });
        if (messageToUpdate) {
            messageToUpdate.read = true;
        }
    };
    MessageContainer.prototype.confirmReadMessages = function () {
        var _this = this;
        var markedAsRead = this.messages.filter(function (msg) { return msg.read; });
        var unread = this.messages.filter(function (msg) { return !msg.read; });
        if (markedAsRead.length > 0) {
            var messageIds = markedAsRead.map(function (msg) { return msg._id; });
            this.messageService.updateMessage(messageIds).subscribe(function (data) {
                if (data && data.ok) {
                    _this.messages = unread;
                    _this.socket = io('http://localhost:3000');
                    _this.socket.emit("unread messages was marked as read", unread.length);
                }
            });
        }
    };
    return MessageContainer;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], MessageContainer.prototype, "tab", void 0);
MessageContainer = __decorate([
    Component({
        selector: "message-container",
        templateUrl: 'message-container.component.html',
        styleUrls: ['message-container.component.css']
    }),
    __metadata("design:paramtypes", [MessageService])
], MessageContainer);
export { MessageContainer };
//# sourceMappingURL=message-container.component.js.map