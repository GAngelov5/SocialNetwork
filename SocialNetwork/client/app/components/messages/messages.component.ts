import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

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