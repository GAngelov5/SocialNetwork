import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: "list-users",
    templateUrl: "users.component.html"
})
export class UsersComponent {
    users: Array<any>;

    constructor(private userService: UserService) {
        this.userService.getUsers().subscribe(users => {
            console.log(users);
            this.users = users;
        })
    }
}

// interface User {
//     _id: string;
//     name: string,
//     username: string,
//     email: string,
//     following: any,
//     messages: any
// }