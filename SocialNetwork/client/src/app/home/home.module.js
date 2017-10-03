var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigationBar/navigationbar.component';
import { RegisterComponent } from './register/register.component';
import { LiveChatComponent } from './liveChat/live-chat.component';
import { ChatService } from './shared/chat.service';
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            HttpModule
        ],
        declarations: [
            HomeComponent,
            LoginComponent,
            NavigationBarComponent,
            RegisterComponent,
            LiveChatComponent
        ],
        providers: [
            ChatService
        ],
        exports: [
            HomeComponent,
            NavigationBarComponent
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map