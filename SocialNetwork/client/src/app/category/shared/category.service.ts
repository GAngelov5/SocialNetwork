import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { Category } from './category.interface';

@Injectable()
export class CategoryService {
    constructor(private http: HttpClient,
                private router: Router) {
    }

    public getCategories() {
        return this.http.get<any>('/api/categories/')
            .map(categories => {
                if (categories) {
                    return categories;
                }
                return null;
            })
            .catch(err => {
                return Observable.of(null);
            });
    }

    public addCategory(category: Category): Observable<any> {
        return this.http.post<Category>('/api/categories/category', category);
    }

    public getCategoryById(categoryId: String): Observable<any> {
        return this.http.get<Category>('/api/categories/' + categoryId);
    }
}