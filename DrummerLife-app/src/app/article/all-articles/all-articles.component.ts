import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Articles } from 'src/app/types/articles';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit{
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
  
          // this.isLoading = false;
          // this.isLoading = true;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`);
        },
      });
    }


}
