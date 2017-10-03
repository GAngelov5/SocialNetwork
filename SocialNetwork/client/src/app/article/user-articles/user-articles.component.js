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
var UserArticlesComponent = (function () {
    function UserArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articles = this.route.snapshot.data['articles'];
    }
    UserArticlesComponent.prototype.showArticle = function (articleId) {
        this.router.navigate(["/article", articleId]);
    };
    return UserArticlesComponent;
}());
UserArticlesComponent = __decorate([
    Component({
        selector: 'user-articles',
        templateUrl: 'user-articles.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router])
], UserArticlesComponent);
export { UserArticlesComponent };
//# sourceMappingURL=user-articles.component.js.map