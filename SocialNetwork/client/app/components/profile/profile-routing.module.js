"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile.component");
var profile_overview_component_1 = require("./profile-overview.component");
var profile_settings_component_1 = require("./profile-settings.component");
var profile_publications_component_1 = require("./profile-publications.component");
var profileRoutes = [
    {
        path: 'profile/:id',
        component: profile_component_1.ProfileComponent,
        children: [
            {
                path: 'overview',
                component: profile_overview_component_1.ProfileOverviewComponent
                // resolve: ProfileOverviewResolver
            },
            {
                path: 'accountSettings',
                component: profile_settings_component_1.ProfileSettingsComponent
            },
            {
                path: 'publications',
                component: profile_publications_component_1.ProfilePublicationsComponent
            }
        ]
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(profileRoutes)],
        exports: [router_1.RouterModule]
    })
], ProfileRoutingModule);
exports.ProfileRoutingModule = ProfileRoutingModule;
//# sourceMappingURL=profile-routing.module.js.map