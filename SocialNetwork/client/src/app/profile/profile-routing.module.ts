import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfilePublicationsComponent } from './components/profile-publications/profile-publications.component';

import { ProfileResolver } from './shared/profile-resolver.service';
import { PublicationsResolver } from './shared/user-publications-resolver.service';

import { AuthGuard } from '../shared/guards/guard.service';

const profileRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileComponent,
        resolve: {
          currentUser: ProfileResolver,
          userPublications: PublicationsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule {}