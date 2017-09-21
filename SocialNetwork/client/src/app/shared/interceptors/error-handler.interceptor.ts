import { Injectable } from '@angular/core';
import { 
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpInterceptor,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor (private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                return event;
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                    return Observable.throw(err);
                }
            }
        });
    }
}