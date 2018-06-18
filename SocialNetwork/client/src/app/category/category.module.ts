import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ArticleModule } from '../article/article.module';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';

import { CategoryService } from './shared/category.service';
import { CategoryResolver } from './shared/category-resolver.service';
import { CategoriesResolver } from './shared/categories-resolver.service';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CategoryRoutingModule,
        ArticleModule
    ],
    declarations: [
        CategoryFormComponent,
        CategoryComponent,
        CategoriesComponent
    ],
    providers: [
        CategoryService,
        CategoryResolver,
        CategoriesResolver
    ]
})
export class CategoryModule { }