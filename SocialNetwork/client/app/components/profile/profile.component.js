"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('../../services/user.service');
var articles_service_1 = require('../../services/articles.service');
var ProfileComponent = (function () {
    function ProfileComponent(userService, articlesService, route, router) {
        this.userService = userService;
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.currentUser = {};
        this.userInfo = {};
        this.profileId = '';
        this.userPublications = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.profileId = params['id'];
        });
        this.userService.getUser(this.profileId).subscribe(function (user) {
            _this.currentUser = user;
        });
        this.router.navigate(['overview', { id: this.profileId }], { relativeTo: this.route });
    };
    ProfileComponent.prototype.getUserInfo = function () {
        this.userInfo.info = this.currentUser.description;
        this.userInfo.following = this.userService.getFollowing(this.currentUser.following);
    };
    ProfileComponent.prototype.getPublicationsForUser = function () {
        var _this = this;
        this.articlesService.getArticlesForUser(this.currentUser._id)
            .subscribe(function (articles) { return _this.userPublications = articles; });
    };
    ProfileComponent.prototype.hideButtons = function () {
        var loggedUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        return this.profileId !== loggedUserId;
    };
    ProfileComponent.prototype.followUser = function () {
        var userId;
        this.route.params.subscribe(function (params) {
            userId = params['id'];
        });
        var user = {
            following: [userId]
        };
        this.userService.updateUser(user).subscribe(function (user) {
            console.log("followed user");
        });
    };
    ProfileComponent.prototype.onClickOveview = function () {
        this.router.navigate(['overview', { id: this.profileId }], { relativeTo: this.route });
    };
    ProfileComponent.prototype.onClickAccountSettings = function () {
        this.router.navigate(['accountSettings', { id: this.profileId }], { relativeTo: this.route });
    };
    ProfileComponent.prototype.onClickPublications = function () {
        this.router.navigate(['publications', { id: this.profileId }], { relativeTo: this.route });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, articles_service_1.ArticleService, router_1.ActivatedRoute, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map