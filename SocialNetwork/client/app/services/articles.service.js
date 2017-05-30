var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get("http://localhost:3000/api/articles/")
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.getArticlesForUserObservable = function (userId) {
        return this.http.get("http://localhost:3000/api/articles/userArticles/" + userId);
    };
    ArticleService.prototype.getArticleById = function (articleId) {
        return this.http.get('http://localhost:3000/api/articles/article/' + articleId).map(function (article) { return article.json(); });
    };
    ArticleService.prototype.getArticlesForUser = function (userId) {
        return this.getArticlesForUserObservable(userId).map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.addArticle = function (article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/articles/article', article)
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.updateArticle = function (article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/articles/article', article)
            .map(function (res) { return res.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ArticleService);
export { ArticleService };
//# sourceMappingURL=articles.service.js.map