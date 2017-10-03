var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import { UserService } from './shared/services/user.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { UserManagementService } from './shared/services/user-management.service';
import { AuthGuard } from './shared/guards/guard.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map