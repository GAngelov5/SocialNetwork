import { Component, Input, Output } from '@angular/core';
import { Message } from '../../shared/models/message.interface';
import { MessageService } from '../../shared/services/message.service';
import * as io from 'socket.io-client';

@Component({
    selector: "message-container",
    templateUrl: 'message-container.component.html',
    styleUrls: ['message-container.component.css']
})
export class MessageContainer {
    messages: Message[];
    @Input()
    tab: String;
    socket: any;

    constructor(private messageService: MessageService) {
        this.messages = [];
    }

    ngOnInit() {
        const currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (this.tab === 'unread') {
            this.messageService.getUserUnreadMessages(currentUserId).subscribe((data: Array<Message>) => {
                if (data) {
                    this.messages = data;            
                }
            });
        } else {
            this.messageService.getUserReadMessages(currentUserId).subscribe((data: Array<Message>) => {
                if (data) {
                    this.messages = data;            
                }
            });
        }
    }

    private readMessage(messageId) {
        let messageToUpdate = this.messages.find((msg) => {
            return msg._id === messageId;
        });
        if (messageToUpdate) {
            messageToUpdate.read = true;
        }
    }

    private confirmReadMessages() {
        const markedAsRead = this.messages.filter(msg => msg.read);
        const unread = this.messages.filter(msg => !msg.read);
        if (markedAsRead.length > 0) {
            const messageIds = markedAsRead.map(msg => msg._id);
            this.messageService.updateMessage(messageIds).subscribe(data => {
                if (data && data.ok) {
                    this.messages = unread;
                    this.socket = io('http://localhost:3000');
                    this.socket.emit("unread messages was marked as read", unread.length);   
                }
            })
        }
    }

}