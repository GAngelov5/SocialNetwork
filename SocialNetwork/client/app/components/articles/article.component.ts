import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../services/articles.service';

@Component({
    templateUrl: 'article.component.html'
})
export class ArticleComponent {
    private article;
    private publisher;
    private hasVoted: boolean;
    private vote = false;

    constructor(private route: ActivatedRoute,
                private articleService: ArticleService) {
        this.route.data.subscribe(data => {
            if (data && data['article']) {
                this.article = data['article'];
                this.publisher = data['article'].publisher[0];
            }
        });
        this.hasVoted = false;
    }

    voteForArticle() {
        
    }
}