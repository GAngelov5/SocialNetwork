import { Injectable }             from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../shared/services/user.service';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/user.interface';

@Injectable()
export class ProfileResolver implements Resolve<User> {
    constructor(private userService: UserService,
                private authService: AuthenticationService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        const userId = route.params.id ? route.params.id : this.authService.getCurrentUserId();
        return this.userService.getUser(userId);
    }
}