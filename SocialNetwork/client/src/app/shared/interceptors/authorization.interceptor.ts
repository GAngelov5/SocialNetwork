import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    private authService: AuthenticationService;
    constructor(private inj: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService = this.inj.get(AuthenticationService);
        let authHeader = this.authService.getAuthenticationHeader();
        if (authHeader === null) {
            authHeader = "";
        }
        const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
        
        return next.handle(authReq);
    } 
}