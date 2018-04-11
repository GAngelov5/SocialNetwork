import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ArticleComponent } from './article/article/article.component';
import { ArticlesComponent } from './article/articles/articles.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { CategoryComponent } from './category/category/category.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { UserArticlesComponent } from './article/user-articles/user-articles.component';
import { MessagesComponent } from './messages/messages.component';
import { LiveChatComponent } from './navigation/liveChat/live-chat.component';

import { AuthGuard } from './shared/guards/guard.service';
import { UserArticlesResolver } from './article/shared/user-articles-resolver.service';
import { ArticleResolver } from './article/shared/article-resolver.service';
import { ArticlesResolver } from './article/shared/articles-resolver.service';
import { CategoryResolver } from './category/shared/category-resolver.service';
import { CategoriesResolver } from './category/shared/categories-resolver.service';
import { UsersResolver } from './users/shared/users-resolver.service';

const appRoutes: Routes = [
    { path: '', component: ArticlesComponent},
    { 
        path: 'users',
        component: UsersComponent,
        resolve: {
            users: UsersResolver

        }
    },
    { path: 'auth', loadChildren: "app/auth/auth.module#AuthModule" },
    { 
        path: 'articles',
        component: ArticlesComponent,
        resolve: {
            articles: ArticlesResolver
        } 
    },
    { 
        path: 'liveChat',
        component: LiveChatComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'messages',
        component: MessagesComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'categories',
        component: CategoriesComponent,
        resolve: {
            categories: CategoriesResolver
        }    
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
        resolve: {
            category: CategoryResolver
        }
    },
    { path: 'profile/:id', component: ProfileComponent },
    { 
        path: 'addArticle',
        component: AddArticleComponent,
        resolve: {
            categories: CategoriesResolver
        } },
    { 
        path: 'articles/:id',
        component: UserArticlesComponent,
        resolve: {
          articles: UserArticlesResolver
        }
    },
    {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}