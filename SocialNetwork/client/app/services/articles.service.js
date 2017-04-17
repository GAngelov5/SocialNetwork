"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get("/api/articles/")
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.getArticlesForUser = function (userId) {
        return this.http.get("/api/articles/userArticles/" + userId)
            .map(function (articles) { return articles.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=articles.service.js.map