import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../shared/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Category } from '../shared/category.interface';

@Component({
    selector: 'categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent { 
    public categories: Category[] = [];
    allowAddCategory: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private categoryService: CategoryService,
                private flashService: FlashMessagesService) {
        this.allowAddCategory = false;
    }

    ngOnInit() {
        const preloadedCategories = this.route.snapshot.data['categories'];
        if (preloadedCategories) {
            this.categories = preloadedCategories;
        }
    }

    viewCategory(categoryId) {
        this.router.navigate(['/category/', categoryId])
    }

    addCategory(category: Category) {
        this.categoryService.addCategory(category).subscribe(data => {
            if (data) {
                this.categories.push(data);
                this.allowAddCategory = false;                
                this.flashService.show("New category added!", {cssClass: "alert-success", timeout: 2500});
            }
        })
    }
}