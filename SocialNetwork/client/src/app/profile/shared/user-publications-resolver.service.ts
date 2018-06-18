import { Injectable } from '@angular/core';
import { Resolve,  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../../article/shared/articles.service';
import { Article } from '../../shared/models/article.interface';

@Injectable()
export class PublicationsResolver implements Resolve<Article[]> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
        return this.articleService.getArticlesForUser(route.params['id']);
    }
}