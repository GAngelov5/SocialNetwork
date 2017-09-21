import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SendMessageComponent } from './send-message/send-message.component';
import { MessagesComponent } from './messages.component';
import { MessageContainer } from './message-container/message-container.component';

import { MessageService } from './shared/message.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SendMessageComponent,
        MessagesComponent,
        MessageContainer
    ],
    providers: [
        MessageService
    ],
    exports: [
        SendMessageComponent
    ]
})
export class MessagesModule { }