import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from '../../../../node_modules/angular2-jwt';
import * as io from 'socket.io-client';
import { LoginResponse } from '../models/login-response.interface';
import { ChatService } from './chat.service';

@Injectable()
export class AuthenticationService {
    private socket: any;
    constructor(private http: HttpClient,
                private router: Router,
                private chatService: ChatService) {
    }

    public login(username:string, password:string) {
        let bodyString = JSON.stringify({username: username, password: password }); // Stringify payload
        return this.http.post<LoginResponse>('/api/users/authenticate', bodyString, 
            { headers: new HttpHeaders().set('Content-Type', 'application/json')})
            .map((res) => {
                let response = res;
                if (response && response.token) {
                    localStorage.setItem('currentUserId', JSON.stringify(response.user.id));
                    localStorage.setItem('user_token', response.token);
                    this.chatService.createIoConnection(response.token);
                }
                return response;
        });
    }

    public logout(): void {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('user_token');
        //on logout remove token from backend or blacklist it.
        this.router.navigate(['/']);
    }

    public grantAccess(userId: string): boolean {
        let loggedUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (!loggedUserId || !userId) return false;
        return loggedUserId === userId;
    }

    public getAuthenticationHeader(): string {
        return localStorage.getItem('user_token');
    }

    public loggedIn() {
        return tokenNotExpired("user_token");
    }

    public getCurrentUserId(): string {
        return JSON.parse(localStorage.getItem('currentUserId'));
    }
}