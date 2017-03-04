import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ProfileModule } from './components/profile/profile.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationBarComponent } from './components/navigationBar/navigationbar.component';
import { UsersComponent } from './components/users/users.component';
import { ArticleComponent } from './components/articles/article.component';
import { CategoryComponent } from './components/categories/category.component';

import { UserService }  from './services/user.service';
import { ArticleService }  from './services/articles.service';
import { AuthenticationService }  from './services/authentication.service';
import { AuthGuard } from './guards/guard.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ProfileModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavigationBarComponent,
        UsersComponent,
        ArticleComponent,
        CategoryComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        AuthGuard,
        ArticleService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
