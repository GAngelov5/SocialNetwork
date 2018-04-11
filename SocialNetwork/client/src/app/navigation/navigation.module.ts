import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material';

import { NavigationComponent } from './navigation.component';
import { LiveChatComponent } from './liveChat/live-chat.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MatToolbarModule
    ],
    declarations: [
        NavigationComponent,
        LiveChatComponent
    ],
    providers: [
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule { }