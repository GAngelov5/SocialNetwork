"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var profile_module_1 = require("./components/profile/profile.module");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var navigationbar_component_1 = require("./components/navigationBar/navigationbar.component");
var users_component_1 = require("./components/users/users.component");
var article_component_1 = require("./components/articles/article.component");
var category_component_1 = require("./components/categories/category.component");
var user_service_1 = require("./services/user.service");
var articles_service_1 = require("./services/articles.service");
var authentication_service_1 = require("./services/authentication.service");
var guard_service_1 = require("./guards/guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule,
            profile_module_1.ProfileModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            navigationbar_component_1.NavigationBarComponent,
            users_component_1.UsersComponent,
            article_component_1.ArticleComponent,
            category_component_1.CategoryComponent
        ],
        providers: [
            user_service_1.UserService,
            authentication_service_1.AuthenticationService,
            guard_service_1.AuthGuard,
            articles_service_1.ArticleService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map