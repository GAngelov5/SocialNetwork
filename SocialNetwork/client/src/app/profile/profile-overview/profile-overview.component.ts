import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../shared/services/user.service';

@Component({
    selector: "profile-overview",
    templateUrl: "profile-overview.component.html"
})
export class ProfileOverviewComponent {
    @Input('access')
    public userAccess: boolean;
    @Input('description')
    public userDescription: String;

    public editAllowed: boolean = false;
    public editedDescription: String;
    public articles: Array<any> = [];

    @Output()
    public descriptionEmitter = new EventEmitter<String>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }
    //TODO When edit description should see the current Description and 
    //change it, not writing new one
    // ngOnInit() {
    //     Object.assign(this.editedDescription, this.userDescription);
    // }

    editDescription() {
        this.editAllowed = !this.editAllowed;
    }

    submitDescription() {
        this.descriptionEmitter.emit(this.editedDescription);
        this.editDescription();
    }

}