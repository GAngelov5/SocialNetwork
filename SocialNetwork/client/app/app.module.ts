import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ProfileModule } from './components/profile/profile.module';
import { MessageModule } from './components/messages/message.module';
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
import { LiveChatComponent } from './components/liveChat/live-chat.component';

import { ArticleContentPipe } from './components/articles/article.pipe';
import { FullNamePipe } from './components/users/full-name.pipe';

import { UserService }  from './services/user.service';
import { ArticleService }  from './services/articles.service';
import { AuthenticationService }  from './services/authentication.service';
import { UserManagementService } from './services/user-management.service';
import { ChatService } from './services/chat.service';
import { MessageService } from './services/message.service';
import { AuthGuard } from './guards/guard.service';
import { UserArticlesResolver } from './components/articles/user-articles-resolver.service';
import { ArticleResolver } from './components/articles/article-resolver.service';
import { CategoryService } from './services/category.service';
import { CategoryResolver } from './components/categories/category-resolver.service';
import { CategoriesResolver } from './components/categories/categories-resolver.service';
import { UsersResolver } from './components/users/users-resolver.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileModule,
        MessageModule,
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
        LiveChatComponent,
        ArticleContentPipe,
        FullNamePipe
    ],
    providers: [
        UserService,
        AuthenticationService,
        AuthGuard,
        ArticleService,
        UserManagementService,
        ChatService,
        MessageService,
        UserArticlesResolver,
        ArticleResolver,
        CategoryService,
        CategoryResolver,
        CategoriesResolver,
        UsersResolver,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    //Components which are mentioned in router configuration will be automatically 
    //added to entryComponents, but here we need to add components which will be
    //called without selector, like components which will be load in third party libraries.
    entryComponents: [AddArticleComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
