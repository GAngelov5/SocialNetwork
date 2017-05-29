import { Injectable }             from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../services/user.service';

@Injectable()
export class ProfileResolver implements Resolve<any> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.userService.getUserObservable(route.params['id']);
    }
}