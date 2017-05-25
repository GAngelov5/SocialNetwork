import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ArticleService } from '../../services/articles.service';

import { FlashMessagesService } from 'angular2-flash-messages';

const EDIT_DESCRIPTION = "Successfully edited your profile settings";

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    currentUser: any;
    selectedTab: String;
    publications: any;

    constructor(private userService:UserService,
                private authService: AuthenticationService,
                private articlesService: ArticleService,
                private route: ActivatedRoute,
                private router: Router,
                private flashService: FlashMessagesService) {
        this.selectedTab = 'Overview';
        this.publications = [];
    }

    ngOnInit() {
        this.route.data
            .subscribe((user) => {
                this.currentUser = JSON.parse(user['currentUser']._body);
            });
        
        let userId = localStorage.getItem('currentUserId');
        this.publications = [];
    }

    grantAccess(): boolean {
        return this.currentUser && this.authService.grantAccess(this.currentUser._id);
    }

    submitDescription(editedDescription: String) {
        this.currentUser.description = editedDescription;
        this.userService.updateUser(this.currentUser).subscribe((updatedUser) => {
            if (updatedUser) {
                this.flashService
                        .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            }
        })
    }

    editProfile(editedUser: any) {
        this.userService.updateUser(editedUser).subscribe((updatedUser) => {
            if (updatedUser) {
                this.flashService
                        .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            } else {
                this.flashService
                        .show("Error", { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    }

    onClickOveview () {
        if (this.selectedTab != 'Overview') {
            this.selectedTab = 'Overview';
        }
    }

    onClickAccountSettings () {
        if (this.selectedTab != 'AccSettings') {
            this.selectedTab = 'AccSettings';
        }
    }

    onClickPublications () {
        if (this.selectedTab != 'Publications') {
            this.selectedTab = 'Publications';
        }
    }

    
}