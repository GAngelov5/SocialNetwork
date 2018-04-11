import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService} from '../shared/articles.service';

@Component({
    templateUrl: "articles.component.html"
})
export class ArticlesComponent {
    articles = []; 

    constructor(private articlesService: ArticleService,
                private route: ActivatedRoute) {
        this.getArticles();
    }

    getArticles(): void {
        this.articlesService.getArticles().subscribe(articles => {
            if (articles) {
                this.articles = articles;
            }
        })
    }

}