import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../shared/category.interface';

@Component({
    selector: 'category-form',
    templateUrl: 'category-form.component.html',
    styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
    
    @Output()
    public categoryEmitter = new EventEmitter<Partial<Category>>();
    addCategoryForm: FormGroup;    

    constructor(private formBuilder: FormBuilder,
                private router: Router) {
        this.createCategoryForm();
    }

    createCategoryForm() {
        this.addCategoryForm = this.formBuilder.group({
            title: '',
            description: ''
        });
    }

    addCategory() {
        const category = {
            name: this.addCategoryForm.get("title").value,
            description: this.addCategoryForm.get("description").value
        }
        this.categoryEmitter.emit(category);
    }

    back() {
        
    }
}