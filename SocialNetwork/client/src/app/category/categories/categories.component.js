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
import { CategoryService } from '../shared/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
var CategoriesComponent = (function () {
    function CategoriesComponent(categoryService, route, router, formBuilder, flashService) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.flashService = flashService;
        this.createCategoryForm();
        this.allowAddCategory = false;
    }
    CategoriesComponent.prototype.createCategoryForm = function () {
        this.addCategoryForm = this.formBuilder.group({
            title: '',
            description: ''
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.categories = this.route.snapshot.data['categories'];
    };
    CategoriesComponent.prototype.addCategory = function () {
        var _this = this;
        var category = {
            name: this.addCategoryForm.get("title").value,
            description: this.addCategoryForm.get("description").value
        };
        this.categoryService.addCategory(category).subscribe(function (data) {
            if (data) {
                _this.flashService.show("New category added!", { cssClass: "alert-success", timeout: 2500 });
                _this.allowAddCategory = false;
            }
        });
    };
    CategoriesComponent.prototype.back = function () {
        this.allowAddCategory = false;
    };
    CategoriesComponent.prototype.viewCategory = function (categoryId) {
        this.router.navigate(['/category/', categoryId]);
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Component({
        selector: 'categories',
        templateUrl: 'categories.component.html',
        styleUrls: ['./categories.component.css']
    }),
    __metadata("design:paramtypes", [CategoryService,
        ActivatedRoute,
        Router,
        FormBuilder,
        FlashMessagesService])
], CategoriesComponent);
export { CategoriesComponent };
//# sourceMappingURL=categories.component.js.map