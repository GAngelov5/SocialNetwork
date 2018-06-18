import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { MessagesModule } from '../messages/messages.module';
import { ChatComponent } from './chat.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChatRoutingModule,
    ],
    declarations: [
        ChatComponent
    ],
    providers: [
    ]
})
export class ChatModule { }