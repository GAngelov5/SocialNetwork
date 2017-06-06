import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    templateUrl: 'messages.component.html'
})
export class MessagesComponent {
    constructor() {

    }

    ngOnInit() {
        let socket = io('http://localhost:3000');
        socket.emit("send user id", JSON.parse(localStorage.getItem("currentUserId")));
    }
}