import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../../shared/models/article.interface';

@Component({
    selector: 'user-articles',
    templateUrl: 'user-articles.component.html'
})
export class UserArticlesComponent {
    articles: Article[];

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.articles = this.route.snapshot.data['articles'];
    }

    showArticle(articleId) {
        this.router.navigate(["/article", articleId]);
    }
}