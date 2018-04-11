var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.categoryEmitter = new EventEmitter();
        this.createCategoryForm();
    }
    AddCategoryComponent.prototype.createCategoryForm = function () {
        this.addCategoryForm = this.formBuilder.group({
            title: '',
            description: ''
        });
    };
    AddCategoryComponent.prototype.addCategory = function () {
        var category = {
            name: this.addCategoryForm.get("title").value,
            description: this.addCategoryForm.get("description").value
        };
        this.categoryEmitter.emit(category);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AddCategoryComponent.prototype, "categoryEmitter", void 0);
    AddCategoryComponent = __decorate([
        Component({
            selector: 'add-category',
            templateUrl: 'add-category.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
export { AddCategoryComponent };
//# sourceMappingURL=add-category.component.js.map