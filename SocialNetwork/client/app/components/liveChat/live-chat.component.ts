import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import * as io from "socket.io-client";

@Component({
    templateUrl: 'live-chat.component.html'
})
export class LiveChatComponent {
    private addMessageForm: FormGroup;
    private messages: Array<any>;
    private connection;

    constructor(private formBuilder: FormBuilder,
                private chatService: ChatService) {
        this.messages = [];
        this.addMessageForm = this.createMessageForm();
    }

    ngOnInit() {
        this.connection = this.chatService.getMessages().subscribe(message => {
            this.messages.push(message);
        })
    }

    createMessageForm() {
        return this.formBuilder.group({
            message: ''
        });
    }

    addMessage() {
        const msg = this.addMessageForm.get("message").value;

        if (msg) {
            const data = {
                sender: JSON.parse(localStorage.getItem('currentUserId')),
                content: msg
            }
            this.chatService.sendMessage(data);
            this.addMessageForm.reset();
        }
    }
}