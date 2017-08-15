import { Injectable } from '@angular/core';
import { Resolve,  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../../services/articles.service';

@Injectable()
export class SelectedTabResolver implements Resolve<any> {
    constructor() {}

    resolve(route: ActivatedRouteSnapshot) {
        if (route.params['selectedTab']) {
            return route.params['selectedTab'];
        } else {
            return 'Overview';
        }
    }
}