import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
    selector: "article-list",
    templateUrl: "articles.component.html"
})
export class ArticlesComponent implements OnInit {
    articles:any = [];

    constructor(private articlesService: ArticleService,
                private router: Router) {}

    ngOnInit() {
        this.getArticles();
    }

    getArticles() {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
        })
    }

    viewArticle(articleId: string) {
        this.router.navigate(['/article', articleId])
    }
}