var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserManagementService } from '../shared/services/user-management.service';
import { MessageService } from '../messages/shared/message.service';
import { UploadService } from '../shared/services/upload.service';
import { CommonMessages } from '../shared/constants/common.constants';
import { FlashMessagesService } from 'angular2-flash-messages';
var EDIT_DESCRIPTION = "Successfully edited your profile settings";
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, authService, userManagementService, messageService, uploadService, route, router, flashService, _ngZone) {
        this.userService = userService;
        this.authService = authService;
        this.userManagementService = userManagementService;
        this.messageService = messageService;
        this.uploadService = uploadService;
        this.route = route;
        this.router = router;
        this.flashService = flashService;
        this._ngZone = _ngZone;
        this.selectedTab = 'Overview';
        this.publications = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.selectedTab = data['selectedTab'];
            _this.publications = data['userPublications'] ? data['userPublications'] : [];
            _this.currentUser = data['currentUser'];
            var img = _this.currentUser && _this.currentUser.avatarImg ? _this.currentUser.avatarImg : null;
            if (img && img.url && img.filename) {
                _this.currentUser.imgSrc = _this._generateUrl(img);
            }
            var loggedUserId = JSON.parse(localStorage.getItem("currentUserId"));
            _this.userService.getUser(loggedUserId).subscribe(function (user) {
                _this.followCheck = _this.userManagementService.checkFollow(_this.currentUser._id, user);
                _this.subCheck = _this.userManagementService.checkSubscription(_this.currentUser._id, user);
            });
        });
        var userId = localStorage.getItem('currentUserId');
    };
    ProfileComponent.prototype.grantAccess = function () {
        return this.currentUser && this.authService.grantAccess(this.currentUser._id);
    };
    ProfileComponent.prototype.submitDescription = function (editedDescription) {
        var _this = this;
        this.currentUser.description = editedDescription;
        this.userService.updateUser(this.currentUser).subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.flashService
                    .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            }
        });
    };
    ProfileComponent.prototype.editProfile = function (editedUser) {
        var _this = this;
        this.userService.updateUser(editedUser).subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.flashService
                    .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            }
            else {
                _this.flashService
                    .show("Error", { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    ProfileComponent.prototype.onClickOveview = function () {
        if (this.selectedTab != 'Overview') {
            this.selectedTab = 'Overview';
        }
    };
    ProfileComponent.prototype.onClickAccountSettings = function () {
        if (this.selectedTab != 'AccSettings') {
            this.selectedTab = 'AccSettings';
        }
    };
    ProfileComponent.prototype.onClickPublications = function () {
        if (this.selectedTab != 'Publications') {
            this.selectedTab = 'Publications';
        }
    };
    ProfileComponent.prototype.uploadImage = function (event) {
        var _this = this;
        var image = event.target.files[0];
        var pattern = new RegExp("image/(jpg|jpeg|png)");
        if (!pattern.test(image.type)) {
            this.flashService
                .show(CommonMessages.NON_IMAGE_FILES_WARNING, { cssClass: 'alert-danger', timeout: 2000 });
            return;
        }
        this.uploadService.uploadImage(image, this.currentUser._id).subscribe(function (data) {
            if (data) {
                _this.currentUser.imgSrc = "http://localhost:3000/" + data.imageSrc;
                _this.flashService
                    .show("Profile picture has been changed!", { cssClass: 'alert-success', timeout: 2000 });
            }
        });
    };
    ProfileComponent.prototype.follow = function () {
        this.userManagementService.followUser(this.currentUser._id);
        this.followCheck = !this.followCheck;
    };
    ProfileComponent.prototype.unfollow = function () {
        this.userManagementService.unfollowUser(this.currentUser._id);
        this.followCheck = !this.followCheck;
    };
    ProfileComponent.prototype.subscribe = function () {
        this.userManagementService.subscribe(this.currentUser._id);
        this.subCheck = !this.subCheck;
    };
    ProfileComponent.prototype.unsubscribe = function () {
        this.userManagementService.unsubscribe(this.currentUser._id);
        this.subCheck = !this.subCheck;
    };
    ProfileComponent.prototype.onClickMessage = function () {
        if (this.selectedTab != 'Message') {
            this.selectedTab = 'Message';
        }
    };
    ProfileComponent.prototype.sendMessage = function (messageData) {
        var message = {
            content: messageData,
            sent_by: JSON.parse(localStorage.getItem("currentUserId")),
            sent_to: this.currentUser._id,
            sent_on: +new Date(),
            read: false
        };
        this.messageService.sendMessage(message);
    };
    ProfileComponent.prototype._generateUrl = function (avatarImg) {
        return 'http://localhost:3000/' + avatarImg.url + '/' + avatarImg.filename;
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'profile',
            templateUrl: 'profile.component.html',
            styleUrls: ['profile.component.css']
        }),
        __metadata("design:paramtypes", [UserService,
            AuthenticationService,
            UserManagementService,
            MessageService,
            UploadService,
            ActivatedRoute,
            Router,
            FlashMessagesService,
            NgZone])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map