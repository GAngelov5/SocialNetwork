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
import { Http } from '@angular/http';
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.sendMessage = function (message) {
        this.http.post("http://localhost:3000/api/messages/message", message).map(function (res) { return res.json(); });
    };
    MessageService.prototype.getUserMessages = function (userId) {
        this.http.get('http://localhost:3000/api/messages/' + userId).map(function (messages) { return messages.json(); });
    };
    return MessageService;
}());
MessageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map