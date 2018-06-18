import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/guards/guard.service';
import { MessagesComponent } from './messages/messages.component';

const messagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MessagesComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(messagesRoutes) ],
  exports: [ RouterModule ]
})
export class MessagesRoutingModule {}