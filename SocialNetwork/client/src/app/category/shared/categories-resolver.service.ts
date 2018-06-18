import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { CategoryService } from './category.service';

import { Observable } from 'rxjs/Rx';
import { Category } from './category.interface';

@Injectable()
export class CategoriesResolver implements Resolve<Category[]> {
    
    constructor(private categoryService: CategoryService){}
    
    resolve() {
        return this.categoryService.getCategories();
    }
}