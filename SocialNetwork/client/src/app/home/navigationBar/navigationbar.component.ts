import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService} from '../../shared/services/authentication.service';
import { UserService } from '../../shared/services/user.service';
import { MessageService } from '../../messages/shared/message.service';

import * as io from 'socket.io-client';

import { Subject } from 'rxjs/Subject';

@Component({
    selector: "nav-bar",
    templateUrl: "navigationbar.component.html"
})
export class NavigationBarComponent {
    username: string;
    currentUserId: string;
    unreadMessages: number;
    socket: any;

    public static returned: Subject<any> = new Subject();   

    constructor(private authService:AuthenticationService,
                private userService: UserService,
                private messageService: MessageService,
                private router: Router) {

        if (authService.loggedIn() && localStorage.getItem('currentUserId')) {
            this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            this.userService.getUser(this.currentUserId).subscribe(user => {
                if (user) {
                    this.username = user.firstName + " " + user.lastName;
                }
            });
        } else {
            this.username = "Guest";
        }
        
        NavigationBarComponent.returned.subscribe(res => {
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

                this.socket = io('http://localhost:3000');
                this.socket.on("new msg incoming", (data) => {
                    if (data && this.currentUserId === data.sent_to) {
                        this.unreadMessages += 1;
                    }
                });
    }

    listenForMessageUpdates() {
        this.socket = io('http://localhost:3000');
        this.socket.on("messages size changed", (data) => {
            this.unreadMessages = data;
        });
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