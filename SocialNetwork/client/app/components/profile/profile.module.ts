import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications.component';

import { UserService } from '../../services/user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileOverviewComponent,
        ProfileSettingsComponent,
        ProfilePublicationsComponent
    ],
    providers: [UserService]
})
export class ProfileModule { }