import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ArticleFormComponent } from './components/article-add-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { UserArticlesComponent } from './components/user-articles/user-articles.component';
import { ViewArticlesComponent } from './components/view-articles/view-articles.component';

import { ArticleService } from './shared/articles.service';
import { ArticleResolver } from './shared/article-resolver.service';
import { ArticlesResolver } from './shared/articles-resolver.service';
import { UserArticlesResolver } from './shared/user-articles-resolver.service';
import { ArticleContentPipe } from './shared/article.pipe';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // ArticleRoutingModule
    ],
    declarations: [
        ArticleFormComponent,
        ArticleComponent,
        ArticlesComponent,
        UserArticlesComponent,
        ViewArticlesComponent,
        ArticleContentPipe        
    ],
    providers: [
        ArticleService,
        ArticleResolver,
        ArticlesResolver,
        UserArticlesResolver
    ],
    exports: [
        ViewArticlesComponent
    ],//Components which are mentioned in router configuration will be automatically 
    //added to entryComponents, but here we need to add components which will be
    //called without selector, like components which will be load in third party libraries.
    entryComponents: [ArticleFormComponent],
})
export class ArticleModule { }