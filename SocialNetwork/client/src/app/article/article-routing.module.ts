import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesResolver } from './shared/articles-resolver.service';
import { UserArticlesComponent } from './components/user-articles/user-articles.component';
import { UserArticlesResolver } from './shared/user-articles-resolver.service';
import { ArticleFormComponent } from './components/article-add-form/article-form.component';
import { CategoriesResolver } from '../category/shared/categories-resolver.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleResolver } from './shared/article-resolver.service';

const articleRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ArticlesComponent,
                resolve: {
                    articles: ArticlesResolver
                }
            },
            {
                path: 'user',
                children: [
                    {
                        path: ':id',
                        component: UserArticlesComponent,
                        resolve: {
                            articles: UserArticlesResolver
                        }
                    }
                ]
            },
            {
                path: ':id',
                component: ArticleComponent,
                resolve: {
                    articles: ArticleResolver
                }
            },
            {
                path: 'add',
                component: ArticleFormComponent,
                resolve: {
                    categories: CategoriesResolver
                } 
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(articleRoutes) ],
    exports: [ RouterModule ]
})
export class ArticleRoutingModule {}