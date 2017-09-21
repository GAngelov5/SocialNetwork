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
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../shared/articles.service';
import { CommonMessages } from '../../shared/constants/common.constants';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
var ArticleComponent = (function () {
    function ArticleComponent(route, router, articleService, flashService, authService, formBuilder) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.flashService = flashService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.editMode = false;
        this.article = this.route.snapshot.data['article'];
        if (this.article) {
            this.publisher = this.article.publisher;
            var voted = void 0;
            if (this.article.votes.length > 0) {
                voted = this.article.votes.filter(function (voteId) {
                    return voteId === JSON.parse(localStorage.getItem('currentUserId'));
                });
            }
            this.hasVoted = voted && voted.length > 0;
            this.vote = voted && voted.length > 0;
            this.createEditForm();
        }
    }
    ArticleComponent.prototype.createEditForm = function () {
        this.editArticleForm = this.formBuilder.group({
            title: [this.article.title, Validators.required],
            category: [this.article.category, Validators.required],
            content: [this.article.content, Validators.required]
        });
    };
    ArticleComponent.prototype.voteForArticle = function () {
        var _this = this;
        var userId = JSON.parse(localStorage.getItem('currentUserId'));
        if (this.hasVoted !== this.vote) {
            if (this.vote) {
                this.article.votes.push(userId);
            }
            else {
                var index = this.article.votes.indexOf(userId);
                this.article.votes.splice(index, 1);
            }
            this.articleService.updateArticle(this.article).subscribe(function (data) {
                if (data) {
                    _this.flashService.show(CommonMessages.SUCCESSFULL_VOTE, { cssClass: 'alert-success', timeout: 2500 });
                    _this.hasVoted = _this.vote;
                }
            });
        }
    };
    ArticleComponent.prototype.editArticle = function (article) {
        var _this = this;
        if (this.validateForm()) {
            this.article.title = this.editArticleForm.get("title").value;
            this.article.category = this.editArticleForm.get("category").value;
            this.article.content = this.editArticleForm.get("content").value;
            this.articleService.updateArticle(this.article).subscribe(function (response) {
                if (response) {
                    _this.flashService.show(CommonMessages.SUCCESSFULL_EDIT_ARTICLE, { cssClass: 'alert-success', timeout: 2500 });
                    _this.editMode = false;
                }
            });
        }
    };
    ArticleComponent.prototype.turnOnEditMode = function () {
        this.editMode = true;
    };
    ArticleComponent.prototype.deleteArticle = function (articleId) {
        var _this = this;
        this.articleService.deleteArticle(articleId).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/articles', _this.article.publisher._id]);
            }
        });
    };
    ArticleComponent.prototype.validateForm = function () {
        var titleStatus = this.editArticleForm.get("title").status;
        var categoryStatus = this.editArticleForm.get("category").status;
        var contentStatus = this.editArticleForm.get("content").status;
        return titleStatus === 'VALID' &&
            categoryStatus === 'VALID' &&
            contentStatus === 'VALID';
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    Component({
        templateUrl: 'article.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ArticleService,
        FlashMessagesService,
        AuthenticationService,
        FormBuilder])
], ArticleComponent);
export { ArticleComponent };
//# sourceMappingURL=article.component.js.map