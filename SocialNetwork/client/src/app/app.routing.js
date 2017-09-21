var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ArticleComponent } from './article/article/article.component';
import { ArticlesComponent } from './article/articles/articles.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { CategoryComponent } from './category/category/category.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { UserArticlesComponent } from './article/user-articles/user-articles.component';
import { MessagesComponent } from './messages/messages.component';
import { LiveChatComponent } from './home/liveChat/live-chat.component';
import { AuthGuard } from './shared/guards/guard.service';
import { UserArticlesResolver } from './article/shared/user-articles-resolver.service';
import { ArticleResolver } from './article/shared/article-resolver.service';
import { ArticlesResolver } from './article/shared/articles-resolver.service';
import { CategoryResolver } from './category/shared/category-resolver.service';
import { CategoriesResolver } from './category/shared/categories-resolver.service';
import { UsersResolver } from './users/shared/users-resolver.service';
var appRoutes = [
    { path: '', component: ArticlesComponent, canActivate: [AuthGuard] },
    {
        path: 'users',
        component: UsersComponent,
        resolve: {
            users: UsersResolver
        }
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LoginComponent },
    {
        path: 'articles',
        component: ArticlesComponent,
        resolve: {
            articles: ArticlesResolver
        }
    },
    { path: 'liveChat', component: LiveChatComponent },
    { path: 'messages', component: MessagesComponent },
    {
        path: 'categories',
        component: CategoriesComponent,
        resolve: {
            categories: CategoriesResolver
        }
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
        resolve: {
            category: CategoryResolver
        }
    },
    { path: 'profile/:id', component: ProfileComponent },
    {
        path: 'addArticle',
        component: AddArticleComponent,
        resolve: {
            categories: CategoriesResolver
        }
    },
    {
        path: 'articles/:id',
        component: UserArticlesComponent,
        resolve: {
            articles: UserArticlesResolver
        }
    },
    {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app.routing.js.map