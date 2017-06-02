import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent { 
    private categories;
    private addCategoryForm: FormGroup;
    private allowAddCategory: boolean;

    constructor(private categoryService: CategoryService,
                private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                private flashService: FlashMessagesService) {
        this.createCategoryForm();
        this.allowAddCategory = false;
    }

    createCategoryForm() {
        this.addCategoryForm = this.formBuilder.group({
            title: '',
            description: ''
        });
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                if (data) {
                    this.categories = data['categories'];
                }
            })
    }

    addCategory() {
        const category = {
            name: this.addCategoryForm.get("title").value,
            description: this.addCategoryForm.get("description").value
        }
        this.categoryService.addCategory(category).subscribe(data => {
            if (data) {
                this.flashService.show("New category added!", {cssClass: "alert-success", timeout: 2500});
                this.allowAddCategory = false;
            }
        })
    }

    back() {
        this.allowAddCategory = false;
    }

    viewCategory(categoryId) {
        this.router.navigate(['/category/', categoryId])
    }
}