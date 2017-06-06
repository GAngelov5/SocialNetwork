import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
    }

    public sendMessage(content) {
        this.socket.emit("new msg", content);
    }

    public getMessages() { 
        let observable = new Observable(observer => {
            this.socket = io(this.url); 
            this.socket.on('receive new msg', (data) => {
                observer.next(data);
            }); 
            return () => {
                this.socket.disconnect();
            }; 
        });
        return observable;
    } 
}