import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService} from '../../shared/articles.service';

@Component({
    selector: 'sn-articles',
    templateUrl: 'articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
    articles = []; 

    public get noArticlesAvailable(): boolean {
        return this.articles.length === 0;
    }

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