import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router) {
    }

    public login(username:string, password:string) {
        let bodyString = JSON.stringify({username: username, password: password }); // Stringify payload
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/authenticate', bodyString, {headers: headers})
            .map(res => {
                let user = res.json();
                if(user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
                    console.log("There is no user with this name")
                }
        });
    }

    public logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }
}