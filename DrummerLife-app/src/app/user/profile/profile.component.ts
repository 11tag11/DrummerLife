import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { Articles } from '../../types/articles';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User | undefined;
  userId!: string;
  articlesList: Articles[] = [];
  ownArticlesList: Articles[] = [];
  subscribe$!: Subscription;

  constructor(
    private titlePage: Title,
    private userService: UserService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.titlePage.setTitle('My profile page');
    this.userId = this.userService.user?._id as string
    this.subscribe$ = this.userService.user$.subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => { },

    })

    this.subscribe$ = this.apiService.getArticles().subscribe({
      next: (articles) => {
        this.articlesList = articles;
        this.ownArticlesList = this.articlesList.filter((article) => article.userId._id == this.userId)
        //this.isLoading = false;
      },
      error: (err) => {
        //this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ ) {
      this.subscribe$ .unsubscribe();
    }
  }

}
