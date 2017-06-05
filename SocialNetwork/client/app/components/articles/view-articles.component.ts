import { Component, Input, SimpleChanges } from '@angular/core';
import { ArticleService} from '../../services/articles.service';
import { Router } from '@angular/router';

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