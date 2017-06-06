import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from '../../node_modules/angular2-jwt';
import * as io from 'socket.io-client';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
                private router: Router) {
    }

    public login(username:string, password:string) {
        let bodyString = JSON.stringify({username: username, password: password }); // Stringify payload
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/authenticate', bodyString, {headers: headers})
            .map(res => {
                let response = res.json();
                if (response && response.token) {
                    localStorage.setItem('currentUserId', JSON.stringify(response.user.id));
                    localStorage.setItem('user_token', response.token);
                }
                return response;
        });
    }

    public logout() {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('user_token');
        this.router.navigate(['/']);
    }

    public grantAccess(userId: string) {
        let loggedUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (!loggedUserId || !userId) return false;
        return loggedUserId === userId;
    }

    public loggedIn() {
        return tokenNotExpired("user_token");
    }
}