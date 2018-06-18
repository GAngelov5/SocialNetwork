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
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../article/shared/articles.service';
var ProfilePublicationsComponent = /** @class */ (function () {
    function ProfilePublicationsComponent(route, router, articleService) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
    }
    ProfilePublicationsComponent.prototype.navigatToAddArticle = function () {
        this.router.navigate(['/addArticle']);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProfilePublicationsComponent.prototype, "publications", void 0);
    ProfilePublicationsComponent = __decorate([
        Component({
            selector: "profile-publications",
            templateUrl: "profile-publications.component.html"
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ArticleService])
    ], ProfilePublicationsComponent);
    return ProfilePublicationsComponent;
}());
export { ProfilePublicationsComponent };
//# sourceMappingURL=profile-publications.component.js.map