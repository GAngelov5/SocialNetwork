import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';

import { ArticleService } from './shared/articles.service';
import { ArticleResolver } from './shared/article-resolver.service';
import { ArticlesResolver } from './shared/articles-resolver.service';
import { UserArticlesResolver } from './shared/user-articles-resolver.service';
import { ArticleContentPipe } from './shared/article.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AddArticleComponent,
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
    entryComponents: [AddArticleComponent],
})
export class ArticleModule { }