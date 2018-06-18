import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SendMessageComponent } from './send-message/send-message.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageContainer } from './message-container/message-container.component';

import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessagesRoutingModule
    ],
    declarations: [
        SendMessageComponent,
        MessagesComponent,
        MessageContainer
    ],
    providers: [
    ],
    exports: [
        SendMessageComponent
    ]
})
export class MessagesModule { }