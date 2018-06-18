import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChatService } from '../shared/services/chat.service';
import * as io from "socket.io-client";

@Component({
    selector: 'chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent {
    addMessageForm: FormGroup;
    messages: Array<any>;
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