import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../../models/article.model';

@Component({
    selector: 'user-articles',
    templateUrl: 'user-articles.component.html'
})
export class UserArticlesComponent {
    articles: Array<Article>;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.route.data
            .subscribe((data) => {
                this.articles = JSON.parse(data['articles']._body);
            });
    }

    showArticle(articleId) {
        this.router.navigate(["/article", articleId]);
    }
}