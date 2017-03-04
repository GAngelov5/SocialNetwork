import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    public getUsers() {
        return this.http.get('api/users')
            .map(res => res.json());
    }

    public createUser(user) {
        return this.http.post('api/users/user', user)
            .map(res => res.json());
    }

    public getUser(userId) {
        // let params = new URLSearchParams();
        // params.set("id", userId);
        return this.http.get('api/users/user/' + userId)
            .map(res=>res.json());
    }

    public getFollowing(following): Array<any> {
        let users = [];
        for (let userId of following) {
            this.getUser(userId).subscribe(user => users.push(user));
        }
        return users;
    }

    public updateUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/users/user/' + user._id, user, {headers: headers})
            .map(res => res.json());
    }
}