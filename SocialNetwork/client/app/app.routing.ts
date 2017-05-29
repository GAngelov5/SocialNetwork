import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { ArticleComponent } from './components/articles/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/categories/category.component';
import { AddArticleComponent } from './components/articles/add-article.component';
import { UserArticlesComponent } from './components/articles/user-articles.component';

import { AuthGuard } from './guards/guard.service';
import { UserArticlesResolver } from './components/articles/user-articles-resolver.service';
import { ArticleResolver } from './components/articles/article-resolver.service';
// import { ArticleUserResolver } from './components/articles/article-user-resolver.service';

const appRoutes: Routes = [
    { path: '', component: ArticleComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'categories', component: CategoryComponent},
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'addArticle', component: AddArticleComponent },
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
            // user: ArticleUserResolver
        }
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}