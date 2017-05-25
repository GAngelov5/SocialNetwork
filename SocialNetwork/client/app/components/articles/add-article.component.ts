import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonMessages } from '../../constants/common.constants';

import { ArticleService } from '../../services/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'add-article',
    templateUrl: 'add-article.component.html'
})
export class AddArticleComponent {
    public addArticleForm: FormGroup;
    public categories: string[];

    constructor(private formBuilder: FormBuilder,
                private articleService: ArticleService,
                private flashService: FlashMessagesService,
                private router: Router) {
        this.categories = ['Business', 'Nature', 'Daily', 'Sport'];
        this.createAddArticleForm();
    }

    createAddArticleForm(): void {
        this.addArticleForm = this.formBuilder.group({
            title: ['', Validators.required],
            category: ['', Validators.required],
            content: ['', Validators.required]
        })
    }

    submitArticle(): void {
        if (this.validateForm()) {
            let article = {
                title: this.addArticleForm.get("title").value,
                category: this.addArticleForm.get("category").value,
                content: this.addArticleForm.get('content').value,
                publisher: JSON.parse(localStorage.getItem("currentUserId"))
            }
            this.articleService.addArticle(article).subscribe((article) => {
                if (article) {
                    this.addArticleForm.reset();
                    this.flashService.show(CommonMessages.ADD_ARTICLE_SUCCESS, 
                        { cssClass: "alert-success", timeout: 2500});
                }
            });
        } else {
            let multipleMessage = [];
            if (this.addArticleForm.get("title").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_TITLE);
            } 
            if (this.addArticleForm.get("category").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_CATEGORY);
            }
            if (this.addArticleForm.get("content").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_CONTENT);
            }
            this.flashService.show(multipleMessage.join('\n'),
                {cssClass: "alert-danger", timeout: 4000});
        }
    }

    validateForm(): boolean {
        let titleStatus = this.addArticleForm.get("title").status;
        let categoryStatus = this.addArticleForm.get("category").status;
        let contentStatus = this.addArticleForm.get("content").status;

        return titleStatus === 'VALID' && 
               categoryStatus === 'VALID' &&
               contentStatus === 'VALID';
    }

    myArticles() {
        this.router.navigate(['/articles', JSON.parse(localStorage.getItem("currentUserId"))]);
    }
}