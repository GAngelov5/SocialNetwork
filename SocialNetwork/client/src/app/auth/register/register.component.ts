import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { Validators, FormBuilder, FormGroup, FormControlName } from '@angular/forms';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    loading = false;

    registerForm: FormGroup;

    constructor(
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder) { 
            this.createRegisterForm();
        }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            firstName: [null, [Validators.required, Validators.maxLength(30)]],
            lastName: [null, [Validators.required, Validators.maxLength(30)]],
            username: [null, [Validators.required, Validators.maxLength(30)]],
            password: [null, [Validators.required, Validators.maxLength(30)]],
            email: [null, [Validators.required, Validators.maxLength(30)]],
        })
    }
    
    register() {
        if (this.registerForm.invalid) {
            return;
        }

        this.userService.createUser(this.registerForm.value)
            .subscribe(
                data => {
                    this.router.navigate(['/auth']);
                });
    }
}
