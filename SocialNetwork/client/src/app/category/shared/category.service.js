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
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
var CategoryService = (function () {
    function CategoryService(http, router) {
        this.http = http;
        this.router = router;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get('http://localhost:3000/api/categories/')
            .map(function (categories) {
            if (categories) {
                return categories;
            }
            return null;
        })
            .catch(function (err) {
            return Observable.of(null);
        });
    };
    CategoryService.prototype.addCategory = function (category) {
        return this.http.post('http://localhost:3000/api/categories/category', category);
    };
    CategoryService.prototype.getCategoryById = function (categoryId) {
        return this.http.get('http://localhost:3000/api/categories/' + categoryId);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map