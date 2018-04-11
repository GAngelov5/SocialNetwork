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
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { tokenNotExpired } from '../../../../node_modules/angular2-jwt';
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.url = 'http://localhost:3000';
    }
    ChatService.prototype.createIoConnection = function (token) {
        var _this = this;
        this.socket = io(this.url, {
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000
        });
        this.socket.on('connect', function () {
            console.log("pak se connectnahme");
        });
        this.socket.on('disconnect', function (reason) {
            console.log("Prichina????   " + reason);
            if (tokenNotExpired('user_token')) {
                _this.socket.open();
            }
        });
        this.socket.on('reconnecting', function (attemptNumber) {
            console.log("Opitvam se da se reconnectna");
        });
        this.socket.on('error', function (error) {
            console.log("Errorche");
        });
        this.socket.emit("new connection", (token));
    };
    ChatService.prototype.sendMessage = function (content) {
        this.socket.emit("new msg", content);
    };
    ChatService.prototype.checkIncomingMessages = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            if (_this.socket) {
                _this.socket.on("new msg incoming", function (data) {
                    observer.next(data);
                });
            }
        });
        return observable;
    };
    ChatService.prototype.getIncomingMessages = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            if (_this.socket) {
                _this.socket.on("messages size changed", function (data) {
                    observer.next(data);
                });
            }
        });
        return observable;
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            if (_this.socket) {
                _this.socket.on('receive new msg', function (data) {
                    observer.next(data);
                });
            }
            return function () {
                if (_this.socket) {
                    _this.socket.disconnect();
                }
            };
        });
        return observable;
    };
    ChatService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());
export { ChatService };
//# sourceMappingURL=chat.service.js.map