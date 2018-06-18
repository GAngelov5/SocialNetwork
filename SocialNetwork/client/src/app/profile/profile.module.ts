import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { MessagesModule } from '../messages/messages.module';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfilePublicationsComponent } from './components/profile-publications/profile-publications.component';

import { ProfileResolver } from './shared/profile-resolver.service';
import { PublicationsResolver } from './shared/user-publications-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        FileUploadModule,
        MessagesModule
    ],
    declarations: [
        ProfileComponent,
        ProfileOverviewComponent,
        ProfileSettingsComponent,
        ProfilePublicationsComponent
    ],
    providers: [
        ProfileResolver,
        PublicationsResolver
    ]
})
export class ProfileModule { }