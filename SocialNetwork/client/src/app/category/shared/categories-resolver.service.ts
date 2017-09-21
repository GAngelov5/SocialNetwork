import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { CategoryService } from './category.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriesResolver implements Resolve<any> {
    
    constructor(private categoryService: CategoryService){}
    
    resolve() {
        return this.categoryService.getCategories();
    }
}