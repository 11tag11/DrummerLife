import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ArticlePreviewComponent } from '../shared/article-preview/ArticlePreviewComponent';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  
//   {
//     path: 'articles',
//     children: [
//         {
//             path: '',
//             pathMatch: 'full',
//             component: AllArticlesComponent
//         },
//         {
//             path: ':articleId',
//             component: ArticlePreviewComponent
//         }
//     ],
// },
// {
//   path: 'add-article',
//   component: NewArticleComponent,
//   // canActivate: [AuthActivate],
// },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
