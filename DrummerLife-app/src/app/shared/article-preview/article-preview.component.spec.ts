import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewComponent } from './ArticlePreviewComponent';

describe('ArticlePreviewComponent', () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePreviewComponent]
    });
    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
