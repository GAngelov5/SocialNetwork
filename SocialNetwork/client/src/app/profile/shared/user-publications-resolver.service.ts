import { Injectable } from '@angular/core';
import { Resolve,  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../../article/shared/articles.service';

@Injectable()
export class PublicationsResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.articleService.getArticlesForUser(route.params['id']);
    }
}