import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './article/components/articles/articles.component';

const appRoutes: Routes = [
    { path: '**', redirectTo: 'articles' },
    { path: 'articles', loadChildren: 'app/article/article.module#ArticleModule' },
    { path: 'users', loadChildren: 'app/users/users.module#UserModule' },
    { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
    { path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule' },
    { path: 'messages', loadChildren: 'app/messages/messages.module#MessagesModule' },
    { path: 'categories', loadChildren: 'app/category/category.module#CategoryModule' },
    { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}