import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: "profile-overview",
    templateUrl: "profile-overview.component.html"
})
export class ProfileOverviewComponent implements OnInit {
    userId: string;
    userInfo: any;
    userBiography: string;
    canEditDescription: boolean;
    editAllowed: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
        this.canEditDescription = false;
        this.editAllowed = false;
        this.userInfo = {
            biography: '',
            following: []
        };
        this.userBiography = '';
        this.userId = '';
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            this.canEditDescription = 
                this.userId === JSON.parse(localStorage.getItem('currentUser')).userId;
        });
        this.userService.getUser(this.userId).subscribe(user => {
            if (user) {
                if (user.description) {
                    this.userInfo.biography = user.description;
                    this.userBiography = user.description;
                } else {
                    this.userInfo.biography = 'No Description';
                    this.userBiography = '';
                }
                this.userInfo.following = user.following;
            }
        });
    }

    editDescription() {
        this.editAllowed = true;
        this.canEditDescription = false;
    }

    submitDescription() {
        let user = {
            _id: this.userId,
            biography: this.userInfo.biography
        }
        this.userService.updateUser(user).subscribe(user => {
            if (user) {
                this.editAllowed = false;
                this.canEditDescription = true;
            }
        })
    }
}