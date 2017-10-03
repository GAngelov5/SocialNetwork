import { Component, EventEmitter, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserManagementService } from '../shared/services/user-management.service';
import { MessageService } from '../messages/shared/message.service';
import { UploadService } from '../shared/services/upload.service';
import { CommonMessages } from '../shared/constants/common.constants';

import { FlashMessagesService } from 'angular2-flash-messages';
import * as io from 'socket.io-client';

import { User } from '../shared/models/user.interface';

const EDIT_DESCRIPTION = "Successfully edited your profile settings";

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser: User;
    selectedTab: string;
    publications: any;
    subCheck: boolean;
    followCheck: boolean;
    socket: any;

    constructor(private userService:UserService,
                private authService: AuthenticationService,
                private userManagementService: UserManagementService,
                private messageService: MessageService,
                private uploadService: UploadService,
                private route: ActivatedRoute,
                private router: Router,
                private flashService: FlashMessagesService,
                private _ngZone: NgZone) {
        this.selectedTab = 'Overview';
        this.publications = [];
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                this.selectedTab = data['selectedTab'];
                this.publications = data['userPublications'] ? data['userPublications'] : [];
                this.currentUser = data['currentUser'];
                const img = this.currentUser && this.currentUser.avatarImg ? this.currentUser.avatarImg : null;
                if (img && img.url && img.filename) {
                    this.currentUser.imgSrc = this._generateUrl(img);
                }
                               
                const loggedUserId = JSON.parse(localStorage.getItem("currentUserId"));
                this.userService.getUser(loggedUserId).subscribe((user) => {
                    this.followCheck = this.userManagementService.checkFollow(this.currentUser._id, user);
                    this.subCheck = this.userManagementService.checkSubscription(this.currentUser._id, user);
                });
            });
        let userId = localStorage.getItem('currentUserId');
    }

    grantAccess(): boolean {
        return this.currentUser && this.authService.grantAccess(this.currentUser._id);
    }

    submitDescription(editedDescription: string) {
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

    uploadImage(event) {
        const image = event.target.files[0];
        const pattern = new RegExp("image/(jpg|jpeg|png)")

        if (!pattern.test(image.type)) {
            this.flashService
                .show(CommonMessages.NON_IMAGE_FILES_WARNING, { cssClass: 'alert-danger', timeout: 2000 });
            return;
        }

        this.uploadService.uploadImage(image, this.currentUser._id).subscribe(data => {
            if (data) {
                this.currentUser.imgSrc = "http://localhost:3000/" + data.imageSrc;
                this.flashService
                    .show("Profile picture has been changed!", { cssClass: 'alert-success', timeout: 2000 }); 
            }
        });
    }

    follow() {
        this.userManagementService.followUser(this.currentUser._id);
        this.followCheck = !this.followCheck;
    }

    unfollow() {
        this.userManagementService.unfollowUser(this.currentUser._id);
        this.followCheck = !this.followCheck;
    }

    subscribe() {
        this.userManagementService.subscribe(this.currentUser._id);
        this.subCheck = !this.subCheck;
    }

    unsubscribe() {
        this.userManagementService.unsubscribe(this.currentUser._id);
        this.subCheck = !this.subCheck;
    }

    onClickMessage() {
        if (this.selectedTab != 'Message') {
            this.selectedTab = 'Message';
        }
    }

    sendMessage(messageData) {
        const message = {
            content: messageData,
            sent_by: JSON.parse(localStorage.getItem("currentUserId")),
            sent_to: this.currentUser._id,
            sent_on: + new Date(),
            read: false
        }

        this.messageService.sendMessage(message);
    }

    _generateUrl(avatarImg: {url: string, filename: string}): string {
        return 'http://localhost:3000/' + avatarImg.url + '/' + avatarImg.filename;
    }

    
}