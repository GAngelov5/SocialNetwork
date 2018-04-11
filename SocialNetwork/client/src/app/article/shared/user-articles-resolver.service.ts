import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from './articles.service';

@Injectable()
export class UserArticlesResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.articleService.getArticlesForUser(route.params['id']);
    }
}