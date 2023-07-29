//17.7.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
// import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PostsListComponent } from './shared/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { ArticlePreviewComponent } from './shared/article-preview/ArticlePreviewComponent';
import { RouterModule } from '@angular/router';
import { ArticleModule } from "./article/article.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

// import { ViewArticleComponent } from './article/view-article/view-article.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        // ArticlesListComponent,
        PostsListComponent,
        ArticlePreviewComponent,
        NewArticleComponent,
        NotFoundComponent,
        // ViewArticleComponent
    ],
    imports: [
      BrowserModule,
      
      HttpClientModule,
      CoreModule,
      UserModule,
      RouterModule,
      AppRoutingModule,
  ],
    providers: [],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
