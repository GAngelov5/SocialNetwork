import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/first';

@Injectable()
export class ProfileResolver implements Resolve<any> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.userService.getUserObservable(route.params['id']);
    }
}