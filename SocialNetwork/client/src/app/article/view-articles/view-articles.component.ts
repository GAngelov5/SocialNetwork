import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService} from '../shared/articles.service';

@Component({
    selector: "view-article-list",
    templateUrl: "view-articles.component.html"
})
export class ViewArticlesComponent {
    @Input()
    private articles; 

    constructor(private articlesService: ArticleService,
                private router: Router) {
        this.articles = [];
    }

    viewArticle(articleId: string) {
        this.router.navigate(['/article', articleId])
    }
}