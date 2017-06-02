import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {
    constructor(private http: Http) {
    }

    public getCategories() {
        return this.http.get('http://localhost:3000/api/categories/').map((data) => data.json());
    }

    public addCategory(category) {
        return this.http.post('http://localhost:3000/api/categories/category', category).map((data) => {
            return data.json();
        });
    }

    public getCategoryById(categoryId) {
        return this.http.get('http://localhost:3000/api/categories/' + categoryId).map((data) => data.json());
    }
}