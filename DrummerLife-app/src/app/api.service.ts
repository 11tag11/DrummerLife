import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Articles } from './types/articles';
import { Post } from './types/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

//12
  getArticle(id: string) {
    const { appUrl } = environment;
    return this.http.get<Articles>(`${appUrl}/articles/${id}`);
  }
//
  getArticles() {
    const { appUrl } = environment;

    return this.http.get<Articles[]>(`${appUrl}/articles`);
  }



  getPosts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`);
  }
}
