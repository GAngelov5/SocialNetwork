"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_component_1 = require("./profile.component");
var profile_overview_component_1 = require("./profile-overview.component");
var profile_settings_component_1 = require("./profile-settings.component");
var profile_publications_component_1 = require("./profile-publications.component");
var user_service_1 = require("../../services/user.service");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            profile_routing_module_1.ProfileRoutingModule
        ],
        declarations: [
            profile_component_1.ProfileComponent,
            profile_overview_component_1.ProfileOverviewComponent,
            profile_settings_component_1.ProfileSettingsComponent,
            profile_publications_component_1.ProfilePublicationsComponent
        ],
        providers: [user_service_1.UserService]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map