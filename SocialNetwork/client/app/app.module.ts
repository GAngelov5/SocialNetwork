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
import { CategoryComponent } from './components/categories/category.component';
import { UserArticlesComponent } from './components/articles/user-articles.component';

import { UserService }  from './services/user.service';
import { ArticleService }  from './services/articles.service';
import { AuthenticationService }  from './services/authentication.service';
import { AuthGuard } from './guards/guard.service';
import { UserArticlesResolver } from './components/articles/user-articles-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileModule,
        AppRoutingModule,
        FlashMessagesModule
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
        CategoryComponent,
        UserArticlesComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        AuthGuard,
        ArticleService,
        UserArticlesResolver,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    //Components which are mentioned in router configuration will be automatically 
    //added to entryComponents, but here we need to add components which will be
    //called without selector, like components which will be load in third party libraries.
    entryComponents: [AddArticleComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
