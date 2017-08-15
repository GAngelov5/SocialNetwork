import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    public getUsers() {
        return this.http.get('http://localhost:3000/api/users')
            .map(res => res.json());
    }

    public createUser(user) {
        return this.http.post('http://localhost:3000/api/users/user', user)
            .map(res => res.json());
    }

    public getUserObservable(userId): Observable<any> {
        return this.http.get('http://localhost:3000/api/users/user/' + userId);
    }

    public getUser(userId) {
        return this.getUserObservable(userId)
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
        return this.http.put('http://localhost:3000/api/users/user/' + user._id, user, {headers: headers})
            .map(res => res.json());
    }

    public changeUserPassword(partialUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/changePassword', partialUser, {headers: headers})
            .map(res => res.json());
    }

    public followUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/follow', user, {headers: headers}).map(res => res.json());
    }

    public unfollowUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/unfollow', user, {headers: headers}).map(res => res.json());
    }

    public subscribeUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/subscribe', user, {headers: headers}).map(res => res.json());
    }
    
    public unsubscribeUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/user/unsubscribe', user, {headers: headers}).map(res => res.json());
    }
}