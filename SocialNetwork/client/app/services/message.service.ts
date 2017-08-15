import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as io from 'socket.io-client';

@Injectable()
export class MessageService {
    private socket;

    constructor(private http: Http) {};

    sendMessage(message) {
        this.socket = io('http://localhost:3000'); 
        this.socket.emit("send pm", message);
    }

    getUserUnreadMessages(userId) {
        return this.http.get('http://localhost:3000/api/messages/unread/' + userId)
            .map((messages) => messages.json());
    }

    getUserReadMessages(userId) {
        return this.http.get('http://localhost:3000/api/messages/read/' + userId)
            .map((messages) => messages.json());
    }

    getUserMessages(userId) {
        return this.http.get('http://localhost:3000/api/messages/' + userId)
            .map((messages) => messages.json());
    }

    updateMessage(messageIds) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/messages/update',
            messageIds, {headers: headers}).map(data => data.json());
    }
}