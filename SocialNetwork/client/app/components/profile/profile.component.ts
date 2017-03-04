import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ArticleService } from '../../services/articles.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
    currentUser: any;
    tabs: Array<String>;
    selectedTab: string;
    userInfo:any;
    profileId: any;
    userPublications:any;

    constructor(private userService:UserService,
                private articlesService: ArticleService,
                private route: ActivatedRoute,
                private router: Router) {
        this.currentUser = {};
        this.userInfo = {};
        this.profileId = '';
        this.userPublications = [];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.profileId = params['id'];
        });

        this.userService.getUser(this.profileId).subscribe(user => {
            this.currentUser = user;
        });

        this.router.navigate(['overview', {id: this.profileId}],
                             {relativeTo: this.route});
    }

    getUserInfo() {
        this.userInfo.info = this.currentUser.description;
        this.userInfo.following = this.userService.getFollowing(this.currentUser.following);
    }

    getPublicationsForUser() {
        this.articlesService.getArticlesForUser(this.currentUser._id)
            .subscribe(articles => this.userPublications = articles);
    }

    hideButtons() {
        let loggedUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        return this.profileId !== loggedUserId;
    }

    followUser() {
        let userId: string;
        this.route.params.subscribe(params => {
            userId = params['id'];
        });

        let user:any = {
            following : [userId]
        };
        this.userService.updateUser(user).subscribe(user => {
            console.log("followed user");
        })

    }

    onClickOveview () {
        this.router.navigate(['overview', {id: this.profileId}],
                             {relativeTo: this.route});
    }

    onClickAccountSettings () {
        this.router.navigate(['accountSettings', {id: this.profileId}],
                             {relativeTo: this.route});
    }

    onClickPublications () {
        this.router.navigate(['publications', {id: this.profileId}],
                             {relativeTo: this.route});
    }
}