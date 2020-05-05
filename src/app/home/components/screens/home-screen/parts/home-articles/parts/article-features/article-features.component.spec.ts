import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeaturesComponent } from './article-features.component';

describe('ArticleFeaturesComponent', () => {
  let component: ArticleFeaturesComponent;
  let fixture: ComponentFixture<ArticleFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
