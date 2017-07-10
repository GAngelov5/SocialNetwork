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
import { MessageModule } from '../messages/message.module';
import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfilePublicationsComponent } from './profile-publications.component';
import { UserService } from '../../services/user.service';
import { ProfileResolver } from './profile-resolver.service';
import { PublicationsResolver } from './user-publications-resolver.service';
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
            MessageModule
        ],
        declarations: [
            ProfileComponent,
            ProfileOverviewComponent,
            ProfileSettingsComponent,
            ProfilePublicationsComponent
        ],
        providers: [UserService, ProfileResolver, PublicationsResolver]
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map