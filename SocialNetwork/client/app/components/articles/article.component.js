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
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CommonMessages } from '../../constants/common.constants';
var ArticleComponent = (function () {
    function ArticleComponent(route, articleService, flashService) {
        var _this = this;
        this.route = route;
        this.articleService = articleService;
        this.flashService = flashService;
        this.route.data.subscribe(function (data) {
            if (data && data['article']) {
                _this.article = data['article'];
                _this.publisher = data['article'].publisher;
                var voted = void 0;
                if (_this.article.votes.length > 0) {
                    voted = _this.article.votes.filter(function (voteId) {
                        return voteId === JSON.parse(localStorage.getItem('currentUserId'));
                    });
                }
                _this.hasVoted = voted && voted.length > 0;
                _this.vote = voted && voted.length > 0;
            }
        });
    }
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
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    Component({
        templateUrl: 'article.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ArticleService,
        FlashMessagesService])
], ArticleComponent);
export { ArticleComponent };
//# sourceMappingURL=article.component.js.map