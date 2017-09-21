import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MessageService } from './shared/message.service';
import { Message } from '../shared/models/message.interface';

@Component({
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css']
})
export class MessagesComponent {
    private currentSelection: String;
    private selected: String;

    constructor(private http: Http,
                private messageService: MessageService) {
        this.selected = 'unread';
    }
}