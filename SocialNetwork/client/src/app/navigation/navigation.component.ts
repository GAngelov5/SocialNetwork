import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService} from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { MessageService } from '../messages/shared/message.service';
import { ChatService } from '../shared/services/chat.service';

import * as io from 'socket.io-client';

import { Subject } from 'rxjs/Subject';

@Component({
    selector: "navigation",
    templateUrl: "navigation.component.html",
    styleUrls: ['navigation.component.css']
})
export class NavigationComponent {
    username: string;
    currentUserId: string;
    unreadMessages: number;

    public static returned: Subject<any> = new Subject();   

    constructor(public authService: AuthenticationService,
                private userService: UserService,
                private messageService: MessageService,
                private chatService: ChatService,
                private router: Router) {
        if (authService.loggedIn() && localStorage.getItem('currentUserId')) {
            this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            const token = localStorage.getItem('user_token');
            this.chatService.createIoConnection(token);
            this.userService.getUser(this.currentUserId).subscribe(user => {
                if (user) {
                    this.username = user.firstName + " " + user.lastName;
                }
            });
        } else {
            this.username = "Guest";
        }
        
        NavigationComponent.returned.subscribe(res => {
            if (res) {
                this.username = res.firstName + " " + res.lastName;
                if (localStorage.getItem('currentUserId')) {
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
                }

                this.getMessageStatus();
            }
        });

        if (this.currentUserId) {
            this.getMessageStatus();
        }

        this.listenForMessageUpdates();
    }

    getMessageStatus() {
        this.messageService.getUserUnreadMessages(this.currentUserId).subscribe((data) => {
                    this.unreadMessages = data ? data.length : 0;
                });

        this.chatService.checkIncomingMessages().subscribe(data => {
            if (data && this.currentUserId === data.sent_to) {
                this.unreadMessages += 1;
            }
        });
    }

    listenForMessageUpdates() {
        this.chatService.getIncomingMessages().subscribe(data => {
            this.unreadMessages = data ? data : this.unreadMessages;
        })
    }

    logout() {
        this.authService.logout();
    }

    goToProfile() {
        if (this.currentUserId) {
            this.router.navigate(['/profile', this.currentUserId]);
        }
    }
}