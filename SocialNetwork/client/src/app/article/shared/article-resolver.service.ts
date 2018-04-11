import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ArticleService } from './articles.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArticleResolver implements Resolve<any> {
    
    constructor(private articleService: ArticleService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.articleService.getArticleById(route.params['id']);
    }
}