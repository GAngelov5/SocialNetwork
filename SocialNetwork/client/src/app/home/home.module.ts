import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigationBar/navigationbar.component';
import { RegisterComponent } from './register/register.component';
import { LiveChatComponent } from './liveChat/live-chat.component';

@NgModule({
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
    ],
    exports: [
        HomeComponent,
        NavigationBarComponent
    ]
})
export class HomeModule { }