import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/guards/guard.service';
import { ChatComponent } from './chat.component';

const profileRoutes: Routes = [
  {
    path: '',
    children: [
        { 
            path: 'chat',
            component: ChatComponent,
            canActivate: [AuthGuard]
        }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})
export class ChatRoutingModule {}