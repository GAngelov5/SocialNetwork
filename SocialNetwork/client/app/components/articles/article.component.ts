import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../services/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CommonMessages } from '../../constants/common.constants'; 

@Component({
    templateUrl: 'article.component.html'
})
export class ArticleComponent {
    private article;
    private publisher;
    private hasVoted: boolean;
    private vote: boolean;

    constructor(private route: ActivatedRoute,
                private articleService: ArticleService,
                private flashService: FlashMessagesService) {
        this.route.data.subscribe(data => {
            if (data && data['article']) {
                this.article = data['article'];
                this.publisher = data['article'].publisher;
                let voted;
                if (this.article.votes.length > 0) {
                    voted = this.article.votes.filter((voteId) => {
                        return voteId === JSON.parse(localStorage.getItem('currentUserId'));
                    });
                }
                this.hasVoted = voted && voted.length > 0;
                this.vote = voted && voted.length > 0;
            }
        });
    }

    voteForArticle() {
        const userId = JSON.parse(localStorage.getItem('currentUserId'));
        if (this.hasVoted !== this.vote) {
            if (this.vote) {
                this.article.votes.push(userId);
            } else {
                const index = this.article.votes.indexOf(userId)
                this.article.votes.splice(index, 1);
            }
            this.articleService.updateArticle(this.article).subscribe(data => {
                if (data) {
                    this.flashService.show(CommonMessages.SUCCESSFULL_VOTE, { cssClass: 'alert-success', timeout: 2500})
                    this.hasVoted = this.vote;
                }
            });
        }
    }
}