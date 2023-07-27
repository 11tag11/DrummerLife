//17.7.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
// import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PostsListComponent } from './shared/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { ArticlePreviewComponent } from './shared/article-preview/article-preview.component';
import { AllArticlesComponent } from './article/all-articles/all-articles.component';
// import { ViewArticleComponent } from './article/view-article/view-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ArticlesListComponent,
    PostsListComponent,
    ArticlePreviewComponent,
    NewArticleComponent,
    AllArticlesComponent,
    // ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
