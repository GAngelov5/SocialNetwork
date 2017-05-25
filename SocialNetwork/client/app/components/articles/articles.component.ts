import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../services/articles.service';

@Component({
    selector: "article-list",
    templateUrl: "article.component.html"
})
export class ArticlesComponent implements OnInit {
    articles:any = [];

    constructor(private articlesService: ArticleService) {}

    ngOnInit() {
        this.getArticles();
    }

    getArticles() {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
        })
    }
}