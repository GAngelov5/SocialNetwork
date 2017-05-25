import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { NavigationBarComponent } from '../navigationBar/navigationbar.component';

@Component({
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    model: any = {};

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private flashMessagesService: FlashMessagesService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe((data) => {
                if (!data.success) {
                    this.flashMessagesService
                        .show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                } else {
                    console.log(data);
                    NavigationBarComponent.returned.next(data.user);
                    this.flashMessagesService
                        .show('Verification succeeded', { cssClass: 'alert-success', timeout: 2000 });
                }
                this.router.navigate(['/'])
            });
    }
}