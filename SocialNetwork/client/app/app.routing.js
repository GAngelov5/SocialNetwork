var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ArticleComponent } from './components/articles/article.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/categories/category.component';
import { AddArticleComponent } from './components/articles/add-article.component';
import { UserArticlesComponent } from './components/articles/user-articles.component';
import { AuthGuard } from './guards/guard.service';
import { UserArticlesResolver } from './components/articles/user-articles-resolver.service';
var appRoutes = [
    { path: '', component: ArticleComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'addArticle', component: AddArticleComponent },
    {
        path: 'articles/:id',
        component: UserArticlesComponent,
        resolve: {
            articles: UserArticlesResolver
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