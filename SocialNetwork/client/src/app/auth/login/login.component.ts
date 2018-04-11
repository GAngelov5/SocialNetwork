import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NavigationComponent } from '../../navigation';
import { FormGroup, FormBuilder, FormControlName, Validators } from '@angular/forms';

@Component({
    templateUrl: "login.component.html"
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private flashMessagesService: FlashMessagesService,
                private fb: FormBuilder) { 
                    this.createLoginForm();
                }

    createLoginForm() {
        this.loginForm = this.fb.group({
            username: [null, Validators.required],
            password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        });
    }

    login() {
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe((data) => {
                if (!data.success) {
                    this.flashMessagesService
                        .show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                } else {
                    NavigationComponent.returned.next(data.user);
                    this.flashMessagesService
                        .show('Verification succeeded', { cssClass: 'alert-success', timeout: 2000 });
                }
                this.router.navigate(['/'])
            });
    }
}