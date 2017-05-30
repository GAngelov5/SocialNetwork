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
import { ArticleService } from '../../services/articles.service';
import { Router } from '@angular/router';
var ArticlesComponent = (function () {
    function ArticlesComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
        this.articles = [];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    ArticlesComponent.prototype.viewArticle = function (articleId) {
        this.router.navigate(['/article', articleId]);
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    Component({
        selector: "article-list",
        templateUrl: "articles.component.html"
    }),
    __metadata("design:paramtypes", [ArticleService,
        Router])
], ArticlesComponent);
export { ArticlesComponent };
//# sourceMappingURL=articles.component.js.map