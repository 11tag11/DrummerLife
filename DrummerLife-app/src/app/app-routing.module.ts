import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { NewArticleComponent } from './article/new-article/new-article.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'articles',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: HomeComponent
        },
        {
            //13
            path: ':articleId',
            component: ViewArticleComponent
        }
    ],
},
{
  path: 'add-article',
  component: NewArticleComponent,
  // canActivate: [AuthActivate],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
