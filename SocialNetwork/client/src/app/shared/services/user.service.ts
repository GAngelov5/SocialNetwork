import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginResponse } from '../models/login-response.interface';
import { User } from '../models/user.interface';
import { ChangedPasswordResponse } from '../models/password-response.interface';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    public getUsers() {
        return this.http.get<User[]>('http://localhost:3000/api/users');
    }

    public createUser(user) {
        return this.http.post<User>('http://localhost:3000/api/users/user', user,
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }

    public getUser(userId): Observable<any> {
        return this.http.get<User>('http://localhost:3000/api/users/user/' + userId)
            .catch((err) => {
                return Observable.of(null);
            });
    }

    public getFollowing(following): Array<User> {
        let users = [];
        for (let userId of following) {
            this.getUser(userId).subscribe(user => users.push(user));
        }
        return users;
    }

    public updateUser(user) {
        return this.http.put<User>('http://localhost:3000/api/users/user/' + user._id, user);
    }

    public changeUserPassword(partialUser) {
        return this.http.post<ChangedPasswordResponse>('http://localhost:3000/api/users/changePassword', partialUser,
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }

    public followUser(user) {
        return this.http.post('http://localhost:3000/api/users/user/follow', user, 
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }

    public unfollowUser(user) {
        return this.http.post('http://localhost:3000/api/users/user/unfollow', user, 
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }

    public subscribeUser(user) {
        return this.http.post('http://localhost:3000/api/users/user/subscribe', user, 
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }
    
    public unsubscribeUser(user) {
        return this.http.post('http://localhost:3000/api/users/user/unsubscribe', user, 
            {headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }
}