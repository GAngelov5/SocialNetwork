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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    ;
    MessageService.prototype.sendMessage = function (message) {
        this.socket = io('http://localhost:3000');
        this.socket.emit("send pm", message);
    };
    MessageService.prototype.getUserUnreadMessages = function (userId) {
        return this.http.get('http://localhost:3000/api/messages/unread/' + userId);
    };
    MessageService.prototype.getUserReadMessages = function (userId) {
        return this.http.get('http://localhost:3000/api/messages/read/' + userId);
    };
    MessageService.prototype.getUserMessages = function (userId) {
        return this.http.get('http://localhost:3000/api/messages/' + userId);
    };
    MessageService.prototype.updateMessage = function (messageIds) {
        return this.http.post('http://localhost:3000/api/messages/update', messageIds, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    };
    return MessageService;
}());
MessageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map