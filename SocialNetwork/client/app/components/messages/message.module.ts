import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages.component';
import { MessagesContainer } from './msgs-container.component';

import { UserService } from '../../services/user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MessageComponent,
        MessagesComponent,
        MessagesContainer
    ],
    exports: [
        MessageComponent
    ],
    providers: [UserService]
})
export class MessageModule { }