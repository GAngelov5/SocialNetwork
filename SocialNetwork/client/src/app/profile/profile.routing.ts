import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications/profile-publications.component';

import { ProfileResolver } from './shared/profile-resolver.service';
import { PublicationsResolver } from './shared/user-publications-resolver.service';
import { SelectedTabResolver } from './shared/selected-tab-resolver.service';

import { AuthGuard } from '../shared/guards/guard.service';

const profileRoutes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: {
        currentUser: ProfileResolver,
        userPublications: PublicationsResolver,
        selectedTab: SelectedTabResolver
    }
  },
  {
    path: 'profile/:id/:selectedTab',
    component: ProfileComponent,
    resolve: {
        currentUser: ProfileResolver,
        userPublications: PublicationsResolver,
        selectedTab: SelectedTabResolver
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule {}