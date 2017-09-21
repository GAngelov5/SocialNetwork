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
import { FormBuilder } from '@angular/forms';
import { ChatService } from '../shared/chat.service';
var LiveChatComponent = (function () {
    function LiveChatComponent(formBuilder, chatService) {
        this.formBuilder = formBuilder;
        this.chatService = chatService;
        this.messages = [];
        this.addMessageForm = this.createMessageForm();
    }
    LiveChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    LiveChatComponent.prototype.createMessageForm = function () {
        return this.formBuilder.group({
            message: ''
        });
    };
    LiveChatComponent.prototype.addMessage = function () {
        var msg = this.addMessageForm.get("message").value;
        if (msg) {
            var data = {
                sender: JSON.parse(localStorage.getItem('currentUserId')),
                content: msg
            };
            this.chatService.sendMessage(data);
            this.addMessageForm.reset();
        }
    };
    return LiveChatComponent;
}());
LiveChatComponent = __decorate([
    Component({
        templateUrl: 'live-chat.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ChatService])
], LiveChatComponent);
export { LiveChatComponent };
//# sourceMappingURL=live-chat.component.js.map