var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { ArticleService } from './shared/articles.service';
import { ArticleResolver } from './shared/article-resolver.service';
import { ArticlesResolver } from './shared/articles-resolver.service';
import { UserArticlesResolver } from './shared/user-articles-resolver.service';
import { ArticleContentPipe } from './shared/article.pipe';
var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AddArticleComponent,
                ArticleComponent,
                ArticlesComponent,
                UserArticlesComponent,
                ViewArticlesComponent,
                ArticleContentPipe
            ],
            providers: [
                ArticleService,
                ArticleResolver,
                ArticlesResolver,
                UserArticlesResolver
            ],
            exports: [
                ViewArticlesComponent
            ],
            //added to entryComponents, but here we need to add components which will be
            //called without selector, like components which will be load in third party libraries.
            entryComponents: [AddArticleComponent],
        })
    ], ArticleModule);
    return ArticleModule;
}());
export { ArticleModule };
//# sourceMappingURL=article.module.js.map