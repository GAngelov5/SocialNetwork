var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
var ErrorHandlerInterceptor = (function () {
    function ErrorHandlerInterceptor(router) {
        this.router = router;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).do(function (event) {
            if (event instanceof HttpResponse) {
                return event;
            }
        }, function (err) {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    _this.router.navigate(['/login']);
                    return Observable.throw(err);
                }
            }
        });
    };
    return ErrorHandlerInterceptor;
}());
ErrorHandlerInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router])
], ErrorHandlerInterceptor);
export { ErrorHandlerInterceptor };
//# sourceMappingURL=error-handler.interceptor.js.map