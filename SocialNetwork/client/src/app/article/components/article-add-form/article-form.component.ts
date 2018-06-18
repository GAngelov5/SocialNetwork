import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Messages } from '../../../shared/constants/messages.constants';

import { ArticleService } from '../../shared/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'article-form',
    templateUrl: 'article-form.component.html',
    styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
    public addArticleForm: FormGroup;
    public categories;

    constructor(private formBuilder: FormBuilder,
                private articleService: ArticleService,
                private flashService: FlashMessagesService,
                private router: Router,
                private route: ActivatedRoute) {
        this.createAddArticleForm();
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            if (data) {
                this.categories = data['categories'];
            }
        })
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
                category: this.retrieveCategoryId(this.addArticleForm.get("category").value),
                content: this.addArticleForm.get('content').value,
                publisher: JSON.parse(localStorage.getItem("currentUserId"))
            }
            this.articleService.addArticle(article).subscribe((article) => {
                if (article) {
                    this.addArticleForm.reset();
                    this.flashService.show(Messages.ADD_ARTICLE_SUCCESS, 
                        { cssClass: "alert-success", timeout: 2500});
                }
            });
        } else {
            let multipleMessage = [];
            if (this.addArticleForm.get("title").status === "INVALID") {
                multipleMessage.push(Messages.INVALID_ARTICLE_TITLE);
            } 
            if (this.addArticleForm.get("category").status === "INVALID") {
                multipleMessage.push(Messages.INVALID_ARTICLE_CATEGORY);
            }
            if (this.addArticleForm.get("content").status === "INVALID") {
                multipleMessage.push(Messages.INVALID_ARTICLE_CONTENT);
            }
            this.flashService.show(multipleMessage.join('\n'),
                {cssClass: "alert-danger", timeout: 4000});
        }
    }

    retrieveCategoryId(name) {
        return this.categories.filter((category) => {
            return category.name === name;
        })[0]._id;
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
        this.addArticleForm.markAsPristine()
        this.router.navigate(['/articles', JSON.parse(localStorage.getItem("currentUserId"))]);
    }
}