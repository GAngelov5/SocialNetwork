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
import { ArticleService } from '../shared/articles.service';
var ArticlesComponent = (function () {
    function ArticlesComponent(articlesService, route) {
        this.articlesService = articlesService;
        this.route = route;
        this.articles = this.route.snapshot.data['articles'];
    }
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    Component({
        templateUrl: "articles.component.html"
    }),
    __metadata("design:paramtypes", [ArticleService,
        ActivatedRoute])
], ArticlesComponent);
export { ArticlesComponent };
//# sourceMappingURL=articles.component.js.map