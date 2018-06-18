import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Interceptors
import { HeaderInterceptor } from './shared/interceptors/authorization.interceptor';
import { ErrorHandlerInterceptor } from './shared/interceptors/error-handler.interceptor';

import { AppComponent } from './app.component';

import { UserService }  from './shared/services/user.service';
import { AuthenticationService }  from './shared/services/authentication.service';
import { UserManagementService } from './shared/services/user-management.service';
import { UploadService } from './shared/services/upload.service';
import { ChatService } from './shared/services/chat.service';
import { AuthGuard } from './shared/guards/guard.service';
import { ChatModule } from './chat/chat.module';
import { MessageService } from './shared/services/message.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NavigationModule,
        FlashMessagesModule.forRoot(),
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
        MessageService,
        ChatService,
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
