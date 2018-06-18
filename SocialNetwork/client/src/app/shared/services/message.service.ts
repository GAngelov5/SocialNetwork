import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';

@Injectable()
export class MessageService {
    private socket;

    constructor(private http: HttpClient) {};

    sendMessage(message) {
        this.socket = io('http://localhost:3000'); 
        this.socket.emit("send pm", message);
    }

    getUserUnreadMessages(userId) {
        return this.http.get<any>('/api/messages/unread/' + userId);
    }

    getUserReadMessages(userId) {
        return this.http.get('/api/messages/read/' + userId);
    }

    getUserMessages(userId) {
        return this.http.get('/api/messages/' + userId);
    }

    updateMessage(messageIds) {
        return this.http.post<any>('/api/messages/update',
            messageIds, {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }
}