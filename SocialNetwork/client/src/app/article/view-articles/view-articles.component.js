var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/articles.service';
var ViewArticlesComponent = (function () {
    function ViewArticlesComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
        this.articles = [];
    }
    ViewArticlesComponent.prototype.viewArticle = function (articleId) {
        this.router.navigate(['/article', articleId]);
    };
    return ViewArticlesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], ViewArticlesComponent.prototype, "articles", void 0);
ViewArticlesComponent = __decorate([
    Component({
        selector: "view-article-list",
        templateUrl: "view-articles.component.html"
    }),
    __metadata("design:paramtypes", [ArticleService,
        Router])
], ViewArticlesComponent);
export { ViewArticlesComponent };
//# sourceMappingURL=view-articles.component.js.map