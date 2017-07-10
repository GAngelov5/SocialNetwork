import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {
    constructor(private http: Http) {
    }

    sendMessage(message) {
        this.http.post("http://localhost:3000/api/messages/message", message).map(res => res.json());
    }

    getUserMessages(userId) {
        this.http.get('http://localhost:3000/api/messages/' + userId).map((messages) => messages.json());
    }
}