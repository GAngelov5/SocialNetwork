var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
var HeaderInterceptor = (function () {
    function HeaderInterceptor(inj) {
        this.inj = inj;
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        this.authService = this.inj.get(AuthenticationService);
        var authHeader = this.authService.getAuthenticationHeader();
        if (authHeader === null) {
            authHeader = "";
        }
        var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    };
    return HeaderInterceptor;
}());
HeaderInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], HeaderInterceptor);
export { HeaderInterceptor };
//# sourceMappingURL=authorization.interceptor.js.map