import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { MessageModule } from '../messages/message.module';

import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications.component';

import { UserService } from '../../services/user.service';
import { ProfileResolver } from './profile-resolver.service';
import { PublicationsResolver } from './user-publications-resolver.service';
import { SelectedTabResolver } from './selected-tab-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        FileUploadModule,
        MessageModule
    ],
    declarations: [
        ProfileComponent,
        ProfileOverviewComponent,
        ProfileSettingsComponent,
        ProfilePublicationsComponent
    ],
    providers: [UserService, ProfileResolver, PublicationsResolver, SelectedTabResolver]
})
export class ProfileModule { }