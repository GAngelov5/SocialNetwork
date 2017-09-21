var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { MessagesModule } from '../messages/messages.module';
import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications/profile-publications.component';
import { UserService } from '../shared/services/user.service';
import { ProfileResolver } from './shared/profile-resolver.service';
import { PublicationsResolver } from './shared/user-publications-resolver.service';
import { SelectedTabResolver } from './shared/selected-tab-resolver.service';
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    NgModule({
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
            UserService,
            ProfileResolver,
            PublicationsResolver,
            SelectedTabResolver
        ]
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map