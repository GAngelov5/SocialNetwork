import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ArticleService } from '../../services/articles.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {
    
    constructor(private articleService: ArticleService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.articleService.getArticleById(route.params['id']);
    }
}