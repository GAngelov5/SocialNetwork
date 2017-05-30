import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ArticleService } from '../../services/articles.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { FileUploader } from 'ng2-file-upload';

const EDIT_DESCRIPTION = "Successfully edited your profile settings";
const UPLOAD_API = 'http://localhost:3000/api/users/user/uploadProfileImage'

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser: any;
    selectedTab: String;
    publications: any;
    uploader: FileUploader;

    constructor(private userService:UserService,
                private authService: AuthenticationService,
                private articlesService: ArticleService,
                private route: ActivatedRoute,
                private router: Router,
                private flashService: FlashMessagesService) {
        this.uploader = new FileUploader({url: UPLOAD_API});
        this.uploader.onCompleteItem = (item, response, status, header) => {
            if (response) {
                let user = {
                    _id: JSON.parse(localStorage.getItem('currentUserId')),
                    imgSrc: response['imgSrc']
                }
                this.userService.updateUser(user).subscribe((data) => {
                    if (data) {
                        this.flashService
                            .show("Profile picture has been changed!", { cssClass: 'alert-success', timeout: 2000 });
                    }
                })
            }
        }
        this.selectedTab = 'Overview';
        this.publications = [];
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                console.log(data);
                this.publications = data['userPublications'] ? data['userPublications'] : [];
                this.currentUser = JSON.parse(data['currentUser']._body);
            });
        
        let userId = localStorage.getItem('currentUserId');
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

    uploadImage() {
        if (this.uploader.queue.length > 0) {
            let item = this.uploader.queue[0];
            item.upload();
        }
    }

    
}