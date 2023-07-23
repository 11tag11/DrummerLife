import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Articles } from 'src/app/types/articles';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  article: Articles | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    const id = this.activatedRoute.snapshot.params['articleId'];
    console.log(id);
    console.log(this.activatedRoute.snapshot.params);
    
    this.apiService.getArticle(id).subscribe((article) => {
      this.article = article;
      // console.log({ article });
      
    });
  }
}
