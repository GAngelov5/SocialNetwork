var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ArticleService } from '../../services/articles.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FileUploader } from 'ng2-file-upload';
var EDIT_DESCRIPTION = "Successfully edited your profile settings";
var UPLOAD_API = 'http://localhost:3000/api/users/user/uploadProfileImage';
var ProfileComponent = (function () {
    function ProfileComponent(userService, authService, articlesService, route, router, flashService, sanitizer) {
        this.userService = userService;
        this.authService = authService;
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.flashService = flashService;
        this.sanitizer = sanitizer;
        this.selectedTab = 'Overview';
        this.publications = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.publications = data['userPublications'] ? data['userPublications'] : [];
            _this.currentUser = JSON.parse(data['currentUser']._body);
            _this.currentUser.imgSrc = _this.currentUser.avatarImg.url + _this.currentUser.avatarImg.filename;
            _this.uploader = new FileUploader({
                url: UPLOAD_API,
                headers: [{ name: 'user-header', value: _this.currentUser._id }]
            });
            _this.uploader.onCompleteItem = function (item, response, status, header) {
                response = JSON.parse(response);
                if (response) {
                    _this.currentUser = response;
                    _this.currentUser.imgSrc = _this.currentUser.avatarImg.url + _this.currentUser.avatarImg.filename;
                    _this.flashService
                        .show("Profile picture has been changed!", { cssClass: 'alert-success', timeout: 2000 });
                }
            };
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
    ProfileComponent.prototype.uploadImage = function () {
        if (this.uploader.queue.length > 0) {
            var item = this.uploader.queue[0];
            item.upload();
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Component({
        selector: 'profile',
        templateUrl: 'profile.component.html',
        styleUrls: ['profile.component.css']
    }),
    __metadata("design:paramtypes", [UserService,
        AuthenticationService,
        ArticleService,
        ActivatedRoute,
        Router,
        FlashMessagesService,
        DomSanitizer])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map