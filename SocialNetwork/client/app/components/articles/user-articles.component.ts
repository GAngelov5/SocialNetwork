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
                const articles = JSON.parse(data['articles']._body);
                this.parseArticles(articles);
            });
    }

    parseArticles(articles) {
        this.articles = articles.map((article) => {
            const content = article.content.split(". ");
            if (content.length > 3) {
                article.content = content.slice(0,3).join(". ");
                article.content += "..."
            }
            return article;
        })
    }

    showArticle(articleId) {
        this.router.navigate(["/article", articleId]);
    }
}