var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ProfileModule } from './components/profile/profile.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationBarComponent } from './components/navigationBar/navigationbar.component';
import { UsersComponent } from './components/users/users.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article.component';
import { AddArticleComponent } from './components/articles/add-article.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category.component';
import { UserArticlesComponent } from './components/articles/user-articles.component';
import { ViewArticlesComponent } from './components/articles/view-articles.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ArticleContentPipe } from './components/articles/article.pipe';
import { FullNamePipe } from './components/users/full-name.pipe';
import { UserService } from './services/user.service';
import { ArticleService } from './services/articles.service';
import { AuthenticationService } from './services/authentication.service';
import { UserManagementService } from './services/user-management.service';
import { AuthGuard } from './guards/guard.service';
import { UserArticlesResolver } from './components/articles/user-articles-resolver.service';
import { ArticleResolver } from './components/articles/article-resolver.service';
import { CategoryService } from './services/category.service';
import { CategoryResolver } from './components/categories/category-resolver.service';
import { CategoriesResolver } from './components/categories/categories-resolver.service';
import { UsersResolver } from './components/users/users-resolver.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            ProfileModule,
            AppRoutingModule,
            FlashMessagesModule,
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            LoginComponent,
            RegisterComponent,
            NavigationBarComponent,
            UsersComponent,
            ArticlesComponent,
            ArticleComponent,
            AddArticleComponent,
            CategoriesComponent,
            CategoryComponent,
            UserArticlesComponent,
            ViewArticlesComponent,
            MessagesComponent,
            ArticleContentPipe,
            FullNamePipe
        ],
        providers: [
            UserService,
            AuthenticationService,
            AuthGuard,
            ArticleService,
            UserManagementService,
            UserArticlesResolver,
            ArticleResolver,
            CategoryService,
            CategoryResolver,
            CategoriesResolver,
            UsersResolver,
            { provide: LocationStrategy, useClass: HashLocationStrategy }
        ],
        //Components which are mentioned in router configuration will be automatically 
        //added to entryComponents, but here we need to add components which will be
        //called without selector, like components which will be load in third party libraries.
        entryComponents: [AddArticleComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map