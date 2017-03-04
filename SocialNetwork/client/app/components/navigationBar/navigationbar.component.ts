import { Component } from '@angular/core';

import { AuthenticationService} from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: "nav-bar",
    templateUrl: "navigationbar.component.html",
    providers: [ AuthenticationService ]
})
export class NavigationBarComponent {
    name: string;
    loginLabel: string;
    currentUserId: string;

    constructor(private authenticationService:AuthenticationService,
                private userService: UserService) {
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        this.userService.getUser(this.currentUserId).subscribe(user => {
            if (user) {
                this.setLabels(user.firstName, "Logout");
            } else {
                this.setLabels("Guest", "Login");
            }
        });
    }

    logout() {
        this.authenticationService.logout();
    }

    private setLabels(name, loginLabel) {
        this.name = name;
        this.loginLabel = loginLabel;
    }
}