import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  // @Input() article: ArticlePreview, add model
  @Input() article: any = null;
}
