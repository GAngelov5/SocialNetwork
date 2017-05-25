var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NavigationBarComponent } from '../navigationBar/navigationbar.component';
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, flashMessagesService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.flashMessagesService = flashMessagesService;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService
                    .show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
            }
            else {
                console.log(data);
                NavigationBarComponent.returned.next(data.user);
                _this.flashMessagesService
                    .show('Verification succeeded', { cssClass: 'alert-success', timeout: 2000 });
            }
            _this.router.navigate(['/']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        templateUrl: "login.component.html"
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AuthenticationService,
        FlashMessagesService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map