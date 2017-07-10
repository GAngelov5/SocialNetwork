var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var MessageComponent = (function () {
    function MessageComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.sendMessageEmitter = new EventEmitter();
        this.messageForm = this.createMessageForm();
    }
    MessageComponent.prototype.createMessageForm = function () {
        return this.formBuilder.group({
            content: ''
        });
    };
    MessageComponent.prototype.sendMessage = function () {
        var messageData = this.messageForm.get('content').value;
        if (messageData) {
            this.sendMessageEmitter.emit(messageData);
            this.messageForm.reset();
        }
    };
    return MessageComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], MessageComponent.prototype, "sendMessageEmitter", void 0);
MessageComponent = __decorate([
    Component({
        selector: 'message',
        templateUrl: 'message.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map