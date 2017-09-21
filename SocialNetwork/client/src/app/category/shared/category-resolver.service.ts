import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CategoryService } from './category.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryResolver implements Resolve<any> {
    
    constructor(private categoryService: CategoryService){}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.categoryService.getCategoryById(route.params['id'])
            .map(category => {
                if (category) {
                    return category;
                }
                return null;
            })
            .catch(err => {
                return Observable.of(null);
            });
    }
}