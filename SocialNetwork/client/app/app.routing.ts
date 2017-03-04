import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { ArticleComponent } from './components/articles/article.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/categories/category.component';

import { AuthGuard } from './guards/guard.service';

const appRoutes: Routes = [
    { path: '', component: ArticleComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'articles', component: ArticleComponent},
    { path: 'categories', component: CategoryComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}