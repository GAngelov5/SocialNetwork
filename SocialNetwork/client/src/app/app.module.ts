import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { MessagesModule } from './messages/messages.module';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './users/users.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './shared/interceptors/authorization.interceptor';
import { ErrorHandlerInterceptor } from './shared/interceptors/error-handler.interceptor';

import { AppComponent } from './app.component';

import { UserService }  from './shared/services/user.service';
import { AuthenticationService }  from './shared/services/authentication.service';
import { UserManagementService } from './shared/services/user-management.service';
import { UploadService } from './shared/services/upload.service';
import { AuthGuard } from './shared/guards/guard.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule,
        ProfileModule,
        MessagesModule,
        ArticleModule,
        CategoryModule,
        UserModule,
        AppRoutingModule,
        FlashMessagesModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        AuthGuard,
        UserManagementService,
        UploadService,
        { 
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
