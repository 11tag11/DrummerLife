
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable, Subscription } from 'rxjs';
// import { ApiService } from 'src/app/api.service';
// import { UserService } from 'src/app/features/user/user.serves';
// import { Post } from 'src/app/types/post';
// import { Theme } from 'src/app/types/theme';


// @Component({
//   selector: 'app-theme-details',
//   templateUrl: './theme-details.component.html',
//   styleUrls: ['./theme-details.component.scss']
// })

// export class ThemeDetailsComponent implements OnInit, OnDestroy {
//   theme: Theme | undefined;
//   canLike$!: Observable<number>;
//   likes$!: Observable<number>;
//   post: Post | undefined;
//   subscribe$!: Subscription;
//  // isEditMode = false;
//   errMessage!: string;
//   currentPostText!: string;


//   constructor(
//     private titlePage: Title,
//     private apiService: ApiService,
//     private userService: UserService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.titlePage.setTitle('Theme details page');
//     this.getThemeWithDetails();

//   }

//   get userId(): string {
//     return this.userService.user?._id || '';
//   }

//   get isLogged(): boolean {
//     return this.userService.isLogged;
//   }

//   likePost(postId: string): void {
//     this.subscribe$ = this.apiService.likePost(postId).subscribe({
//       next: () => {
//         this.getThemeWithDetails();
//       },
//       error: (err) => this.errMessage = err.error.message
//     })
//   }

//   /*
//   editPost(postId: string, postText: string): void { 
//     this.isEditMode = true;
//     this.currentPostText = postText;   
//     console.log(postText);
//   }
//   */


//   saveComment(form: NgForm){
//     form.setValue(
//       {
         
//         postText: this.currentPostText
//       }

//     )

//   }


//   deletePost(postId: string): void {
//     const themeId = this.activatedRoute.snapshot.params['themeId'];
  
//     this.subscribe$ = this.apiService.deletePost(themeId, postId).subscribe({
//       next: () => {
//         console.log("succesfully deleted post");

//         this.getThemeWithDetails();
//       },
//       error: (err) => this.errMessage = err.error.message
//     })

//   }


//   getThemeWithDetails(): void {
//     const themeId = this.activatedRoute.snapshot.params['themeId'];

//     this.subscribe$ = this.apiService.getTheme(themeId).subscribe({
//       next: (theme) => {
//         this.theme = theme;
//         console.log({ theme });
//       },
//       error: (err) => {
//         this.router.navigate(["**"]);
//       }
//     })
//   }

//   postComment(form: NgForm): void {
//     const themeId = this.activatedRoute.snapshot.params['themeId'];
//     if (form.invalid) {
//       return;
//     }
//     const { postText } = form.value;

//     this.subscribe$ = this.apiService.postComment(postText, themeId).subscribe({
//       next: () => {
//         form.reset()
//         this.getThemeWithDetails();
//       },
//       error: (err) => this.errMessage = err.error.message
//     })

//   }

//   ngOnDestroy(): void {
//     if (this.subscribe$) {
//       this.subscribe$.unsubscribe();
//     }
//   }


// }

//...........








import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Articles } from 'src/app/types/articles';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  article: Articles | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    const id = this.activatedRoute.snapshot.params['articleId'];

    this.apiService.getArticle(id).subscribe((article) => {
      this.article = article;
      console.log({ article });
    });
  }
}
