import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
    
    constructor(private userService: UserService) {}
    
    resolve() {
        return this.userService.getUsers();
    }
}