var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './shared/profile-resolver.service';
import { PublicationsResolver } from './shared/user-publications-resolver.service';
import { SelectedTabResolver } from './shared/selected-tab-resolver.service';
var profileRoutes = [
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
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(profileRoutes)],
        exports: [RouterModule]
    })
], ProfileRoutingModule);
export { ProfileRoutingModule };
//# sourceMappingURL=profile.routing.js.map