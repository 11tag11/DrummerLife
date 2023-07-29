import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ArticlePreviewComponent } from '../shared/article-preview/ArticlePreviewComponent';

// import { NewArticleComponent } from './new-article/new-article.component';


import { ArticleRoutingModule } from './article-routing.module';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // ArticlePreviewComponent,
    // NewArticleComponent,
    AllArticlesComponent,

  ],
  imports: [
    ArticleRoutingModule,
    CommonModule,
    RouterModule
    
  ],
  exports:[
    AllArticlesComponent
  ]
})
export class ArticleModule { }
