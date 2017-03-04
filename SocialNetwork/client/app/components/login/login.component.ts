import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    model: any = {};

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe((data) => {
                this.router.navigate(['/'])
            })
    }
}