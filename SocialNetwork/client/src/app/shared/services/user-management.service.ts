import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable()
export class UserManagementService {
    followingCacheMap = <{string: boolean}> {};
    subscriptionCacheMap = <{string: boolean}> {};
    
    constructor(private userService: UserService,
                private router: Router) {
    }

    getFollowingCacheMap() {
        return this.followingCacheMap;
    }

    getSubscriptionCacheMap() {
        return this.subscriptionCacheMap;
    }

    followUser(userId: string): void {
        const data = {
            userId: JSON.parse(localStorage.getItem("currentUserId")),
            followingUser: userId
        }
        this.userService.followUser(data).subscribe((user: any) => {
            if (user) {
                this.followingCacheMap[userId] = this.checkFollow(userId, user);
            }
        });
    }

    unfollowUser(userId: string): void {
        const data = {
            userId: JSON.parse(localStorage.getItem("currentUserId")),
            followingUser: userId
        }
        this.userService.unfollowUser(data).subscribe((user: any) => {
            if (user) {
                this.followingCacheMap[userId] = this.checkFollow(userId, user);
                
            }
        });
    }

    subscribe(subscriberId: string): void {
        this.userService.getUser(JSON.parse(localStorage.getItem("currentUserId"))).subscribe(user => {
            if (user) {
                const data = {
                    subscriberId: subscriberId,
                    userEmail: user.email,
                    userId: user._id
                }
                this.userService.subscribeUser(data).subscribe((updatedUser) => {
                    if (updatedUser) {
                        this.subscriptionCacheMap[subscriberId] = this.checkSubscription(subscriberId, updatedUser);
                    }
                }); 
            }
        });
    }

    unsubscribe(subscriberId: string): void {
        this.userService.getUser(JSON.parse(localStorage.getItem("currentUserId"))).subscribe(user => {
            if (user) {
                const data = {
                    subscriberId: subscriberId,
                    userEmail: user.email,
                    userId: user._id
                }
                this.userService.unsubscribeUser(data).subscribe((updatedUser) => {
                    if (updatedUser) {
                        this.subscriptionCacheMap[subscriberId] = this.checkSubscription(subscriberId, updatedUser);
                    }
                })     
            }
        });
    }
    //unsubscribeCheck
    checkFollow(userId, currentUser) {
        const following = currentUser.following.filter((followingId: String) => {
            return followingId === userId;
        });

        return following.length > 0;
    }

    checkSubscription(userId, currentUser) {
        const subscribed = currentUser.subscribedTo.filter((subscriber: String) => {
            return subscriber === userId;
        });

        return subscribed.length > 0;
    }

    messageUser(userId) {
        this.router.navigate(['/profile', userId, "Message"]);
    }
}