import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ArticleService } from '../../services/articles.service';
import { UserManagementService } from '../../services/user-management.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { FileUploader } from 'ng2-file-upload';
import * as io from 'socket.io-client';


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
    subCheck: boolean;
    followCheck: boolean;

    constructor(private userService:UserService,
                private authService: AuthenticationService,
                private articlesService: ArticleService,
                private userManagementService: UserManagementService,
                private route: ActivatedRoute,
                private router: Router,
                private flashService: FlashMessagesService) {
        this.selectedTab = 'Overview';
        this.publications = [];
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                this.publications = data['userPublications'] ? data['userPublications'] : [];
                this.currentUser = JSON.parse(data['currentUser']._body);
                this.currentUser.imgSrc = "http://localhost:3000/" + this.currentUser.avatarImg.url;
                this.uploader = new FileUploader({
                    url: UPLOAD_API,
                    headers: [{ name: 'user-header', value: this.currentUser._id }]
                });
                
                const loggedUserId = JSON.parse(localStorage.getItem("currentUserId"));
                this.userService.getUser(loggedUserId).subscribe((user) => {
                    this.followCheck = this.userManagementService.checkFollow(this.currentUser._id, user);
                    this.subCheck = this.userManagementService.checkSubscription(this.currentUser._id, user);
                })
                
                this.uploader.onCompleteItem = (item, response, status, header) => {
                    response = JSON.parse(response);
                    if (response) {
                        this.currentUser = response;
                        //TODO remove localhost when not using webpack-dev-server 
                        this.currentUser.imgSrc = "http://localhost:3000/" + this.currentUser.avatarImg.url;                
                        this.flashService
                            .show("Profile picture has been changed!", { cssClass: 'alert-success', timeout: 2000 });
                    }
                }
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
        // const message = {
        //     content: messageData,
        //     sent_by: JSON.parse(localStorage.getItem("currentUserId")),
        //     sent_to: this.currentUser._id,
        //     sent_on: + new Date(),
        //     read: false
        // }
        // var socket = this.socketManager.getSocketManager();

        // socket.emit("new msg to user", message);
        // socket.on("error in sending message", (err) => {
        //     this.flashService.show("Error occured " + err, {cssClass: "alert-danger", timeout: 2000});
        // });
        // socket.on("message was stored", (data) => {
        //     this.flashService.show("Message sent!", {cssClass: "alert-danger", timeout: 2000});
        // });
    }

    
}