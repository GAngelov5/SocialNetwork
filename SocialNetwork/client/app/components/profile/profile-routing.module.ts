import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications.component';

// import { ProfileOverviewResolver } from './profile-overview-resolver.service';


import { AuthGuard } from '../../guards/guard.service';

const profileRoutes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
        { 
          path: 'overview',
          component: ProfileOverviewComponent
          // resolve: ProfileOverviewResolver
        },
        { 
          path: 'accountSettings',
          component: ProfileSettingsComponent
        },
        { 
          path: 'publications',
          component: ProfilePublicationsComponent 
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule {}