import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService} from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

import { Subject } from 'rxjs/Subject';

@Component({
    selector: "nav-bar",
    templateUrl: "navigationbar.component.html"
})
export class NavigationBarComponent {
    username: string;
    currentUserId: string;
    public static returned: Subject<any> = new Subject();   

    constructor(private authService:AuthenticationService,
                private userService: UserService,
                private router: Router) {

        if (localStorage.getItem('currentUserId')) {
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
            }
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