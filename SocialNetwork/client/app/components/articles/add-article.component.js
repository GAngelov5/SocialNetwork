var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonMessages } from '../../constants/common.constants';
import { ArticleService } from '../../services/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';
var AddArticleComponent = (function () {
    function AddArticleComponent(formBuilder, articleService, flashService, router) {
        this.formBuilder = formBuilder;
        this.articleService = articleService;
        this.flashService = flashService;
        this.router = router;
        this.categories = ['Business', 'Nature', 'Daily', 'Sport'];
        this.createAddArticleForm();
    }
    AddArticleComponent.prototype.createAddArticleForm = function () {
        this.addArticleForm = this.formBuilder.group({
            title: ['', Validators.required],
            category: ['', Validators.required],
            content: ['', Validators.required]
        });
    };
    AddArticleComponent.prototype.submitArticle = function () {
        var _this = this;
        if (this.validateForm()) {
            var article = {
                title: this.addArticleForm.get("title").value,
                category: this.addArticleForm.get("category").value,
                content: this.addArticleForm.get('content').value,
                publisher: JSON.parse(localStorage.getItem("currentUserId"))
            };
            this.articleService.addArticle(article).subscribe(function (article) {
                if (article) {
                    _this.addArticleForm.reset();
                    _this.flashService.show(CommonMessages.ADD_ARTICLE_SUCCESS, { cssClass: "alert-success", timeout: 2500 });
                }
            });
        }
        else {
            var multipleMessage = [];
            if (this.addArticleForm.get("title").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_TITLE);
            }
            if (this.addArticleForm.get("category").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_CATEGORY);
            }
            if (this.addArticleForm.get("content").status === "INVALID") {
                multipleMessage.push(CommonMessages.INVALID_ARTICLE_CONTENT);
            }
            this.flashService.show(multipleMessage.join('\n'), { cssClass: "alert-danger", timeout: 4000 });
        }
    };
    AddArticleComponent.prototype.validateForm = function () {
        var titleStatus = this.addArticleForm.get("title").status;
        var categoryStatus = this.addArticleForm.get("category").status;
        var contentStatus = this.addArticleForm.get("content").status;
        return titleStatus === 'VALID' &&
            categoryStatus === 'VALID' &&
            contentStatus === 'VALID';
    };
    AddArticleComponent.prototype.myArticles = function () {
    };
    return AddArticleComponent;
}());
AddArticleComponent = __decorate([
    Component({
        selector: 'add-article',
        templateUrl: 'add-article.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ArticleService,
        FlashMessagesService,
        Router])
], AddArticleComponent);
export { AddArticleComponent };
//# sourceMappingURL=add-article.component.js.map