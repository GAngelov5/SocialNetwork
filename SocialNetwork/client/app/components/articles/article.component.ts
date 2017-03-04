import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../services/articles.service';

@Component({
    moduleId: module.id,
    selector: "article-list",
    templateUrl: "article.component.html"
})
export class ArticleComponent implements OnInit {
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