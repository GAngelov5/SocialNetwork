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
import { Http } from '@angular/http';
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get('http://localhost:3000/api/categories/').map(function (data) { return data.json(); });
    };
    CategoryService.prototype.addCategory = function (category) {
        return this.http.post('http://localhost:3000/api/categories/category', category).map(function (data) {
            return data.json();
        });
    };
    CategoryService.prototype.getCategoryById = function (categoryId) {
        return this.http.get('http://localhost:3000/api/categories/' + categoryId).map(function (data) { return data.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map