import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
    selector: 'send-message',
    templateUrl: 'send-message.component.html'
})
export class SendMessageComponent {
    @Output()
    private sendMessageEmitter = new EventEmitter<any>();
    private messageForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.messageForm = this.createMessageForm();
    }

    createMessageForm() {
        return this.formBuilder.group({
            content: ''
        });
    }

    sendMessage() {
        const messageData = this.messageForm.get('content').value;
        if (messageData) {
            this.sendMessageEmitter.emit(messageData);
            this.messageForm.reset();
        }
    }
}