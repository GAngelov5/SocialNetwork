import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { CategoryResolver } from "./shared/category-resolver.service";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoriesResolver } from "./shared/categories-resolver.service";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'category',
                children: [
                    {
                        path: ':id',
                        component: CategoryComponent,
                        resolve: {
                            category: CategoryResolver
                        }
                    }
                ]
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                resolve: {
                    categories: CategoriesResolver
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}