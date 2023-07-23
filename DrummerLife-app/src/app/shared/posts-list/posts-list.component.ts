import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  isLoading: boolean = true;
  thereAreNoPosts: boolean = false;

  constructor(private apiService: ApiService) {} 

  ngOnInit(): void {
    this.apiService.getPosts(7).subscribe({
      next: (posts) => {
        this.postsList = posts;
        
        // // mock, no data from back end
        // this.lastArticlesList = [];
        
        if (this.postsList.length === 0) {
          this.thereAreNoPosts = true;
        }

        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }
}
