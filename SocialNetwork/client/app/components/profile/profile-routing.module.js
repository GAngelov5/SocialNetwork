var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';
import { PublicationsResolver } from './user-publications-resolver.service';
var profileRoutes = [
    {
        path: 'profile/:id',
        component: ProfileComponent,
        resolve: {
            currentUser: ProfileResolver,
            userPublications: PublicationsResolver
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
//# sourceMappingURL=profile-routing.module.js.map