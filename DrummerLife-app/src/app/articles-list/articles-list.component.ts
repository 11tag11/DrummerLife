import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Articles } from '../types/articles';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articlesList: Articles[] = [];
  isLoading: boolean = true;
  // thereAreNoArticles: boolean = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService
    ) {} 

    get isLogged(): boolean {
      return this.userService.isLogged;
    }

  ngOnInit(): void {
    this.apiService.getArticles().subscribe({
      next: (articles) => {
        this.articlesList = articles;
        this.isLoading = false;
        // if (this.articlesList.length === 0) {
        //   this.thereAreNoArticles = true;
        // }

        this.isLoading = false;
        // this.isLoading = true;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
