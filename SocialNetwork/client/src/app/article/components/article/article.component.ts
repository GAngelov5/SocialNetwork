import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from '../../shared/articles.service';
import { Messages } from '../../../shared/constants/messages.constants'; 
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    templateUrl: 'article.component.html'
})
export class ArticleComponent {
    private publisher;
    private hasVoted: boolean;
    private vote: boolean;
    editMode: boolean;
    editArticleForm: FormGroup;
    article;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private articleService: ArticleService,
                private flashService: FlashMessagesService,
                private authService: AuthenticationService,
                private formBuilder: FormBuilder) {
        this.editMode = false;
        this.article = this.route.snapshot.data['article'];
        if (this.article) {
            this.publisher = this.article.publisher;
            let voted;
            if (this.article.votes.length > 0) {
                voted = this.article.votes.filter((voteId) => {
                    return voteId === JSON.parse(localStorage.getItem('currentUserId'));
                });
            }
            this.hasVoted = voted && voted.length > 0;
            this.vote = voted && voted.length > 0;
            this.createEditForm();
        }
    }

    createEditForm() {
         this.editArticleForm = this.formBuilder.group({
            title: [this.article.title, Validators.required],
            category: [this.article.category, Validators.required],
            content: [this.article.content, Validators.required]
        })
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
                    this.flashService.show(Messages.SUCCESSFULL_VOTE, { cssClass: 'alert-success', timeout: 2500})
                    this.hasVoted = this.vote;
                }
            });
        }
    }

    editArticle(article) {
        if(this.validateForm()) {
            this.article.title = this.editArticleForm.get("title").value;
            this.article.category = this.editArticleForm.get("category").value;
            this.article.content = this.editArticleForm.get("content").value;
            
            this.articleService.updateArticle(this.article).subscribe((response) => {
                if (response) {
                    this.flashService.show(Messages.SUCCESSFULL_EDIT_ARTICLE, { cssClass: 'alert-success', timeout: 2500});
                    this.editMode = false;                  
                }
            })
        }
    }

    turnOnEditMode() {
        this.editMode = true;
    }

    deleteArticle(articleId: string) {
        this.articleService.deleteArticle(articleId).subscribe((data) => {
            if (data) {
                this.router.navigate(['/articles', this.article.publisher._id])
            }
        });
    }

    validateForm(): boolean {
        let titleStatus = this.editArticleForm.get("title").status;
        let categoryStatus = this.editArticleForm.get("category").status;
        let contentStatus = this.editArticleForm.get("content").status;

        return titleStatus === 'VALID' && 
               categoryStatus === 'VALID' &&
               contentStatus === 'VALID';
    }
}