import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryResolver implements Resolve<any> {
    
    constructor(private categoryService: CategoryService){}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.categoryService.getCategoryById(route.params['id']);
    }
}