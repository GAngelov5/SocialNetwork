import { Component } from '@angular/core';
import { ArticleService} from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "articles.component.html"
})
export class ArticlesComponent {
    private articles; 

    constructor(private articlesService: ArticleService,
                private router: Router) {
        this.getArticles();
    }

    getArticles() {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
        });
    }

}