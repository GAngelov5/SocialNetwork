import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { tokenNotExpired } from '../../../../node_modules/angular2-jwt';

import { Message } from '../models/message.interface';

@Injectable()
export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
    }

    public createIoConnection(token) {
        this.socket = io(this.url, {
            reconnection: true,
            reconnectionAttempts : Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax : 5000
        });

        this.socket.on('connect', () => {
            console.log("pak se connectnahme");
        })
        this.socket.on('disconnect', (reason) => {
            console.log("Prichina????   " + reason)
            if (tokenNotExpired('user_token')) {
                this.socket.open();
            }
        });
        this.socket.on('reconnecting', (attemptNumber) => {
            console.log("Opitvam se da se reconnectna")
        });
        this.socket.on('error', (error) => {
            console.log("Errorche")
        });
        this.socket.emit("new connection", (token));
    }

    public sendMessage(content) {
        this.socket.emit("new msg", content);
    }

    public checkIncomingMessages(): Observable<Message> {
        let observable = new Observable<Message>(observer => {
            if (this.socket) {
                this.socket.on("new msg incoming", (data) => {
                    observer.next(data);
                });
            }
        });
        return observable;
    }

    public getIncomingMessages(): Observable<number> {
        let observable = new Observable<number>(observer => {
            if (this.socket) {
                this.socket.on("messages size changed", (data) => {
                    observer.next(data);
                });
            }
        });
        return observable;        
    }

    public getMessages() { 
        let observable = new Observable(observer => {
            if (this.socket) {
                this.socket.on('receive new msg', (data) => {
                    observer.next(data);
                });
            }
            return () => {
                if (this.socket) {
                    this.socket.disconnect();
                }
            }; 
        });
        return observable;
    } 
}