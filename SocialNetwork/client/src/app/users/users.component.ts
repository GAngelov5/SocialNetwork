import { Component, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user.interface';
import { UserManagementService } from '../shared/services/user-management.service';

@Component({
    selector: "list-users",
    templateUrl: "users.component.html",
    styleUrls: ['users.component.css']
})
export class UsersComponent {
    users: Array<User>;
    currentUser: User;
    unsubscribeCheck: boolean;

    constructor(private userManagementService: UserManagementService,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.data.subscribe((data) => {
            if (data && data['users']) {
                this.currentUser = this.getLoggedUser(data['users']);
                this.users = this.excludeLoggedUser(data['users']);
                this.users.forEach((user: User) => {
                    this.userManagementService.followingCacheMap[user._id] =
                        this.userManagementService.checkFollow(user._id, this.currentUser);
                    this.userManagementService.subscriptionCacheMap[user._id] =
                        this.userManagementService.checkSubscription(user._id, this.currentUser);
                });
            }
        });
    }

    excludeLoggedUser(users: Array<User>): Array<User> {
        return users.filter((user: User) => {
            return user._id !== JSON.parse(localStorage.getItem('currentUserId'));
        });
    }

    getLoggedUser(users: Array<User>): User {
        return users.filter((user: User) => {
            return user._id == JSON.parse(localStorage.getItem('currentUserId'));
        })[0];
    }

    viewProfile(userId: string): void {
        this.router.navigate(['/profile', userId]);
    }
}