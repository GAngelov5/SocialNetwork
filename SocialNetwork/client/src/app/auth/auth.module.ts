import { NgModule } from '@angular/core';
import { RegisterComponent, LoginComponent, AuthRoutingModule } from '.';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [],
    providers: []
})
export class AuthModule {}