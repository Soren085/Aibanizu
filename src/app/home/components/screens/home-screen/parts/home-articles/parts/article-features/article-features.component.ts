import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/core/mock-up/mock-up';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'article-features',
  templateUrl: './article-features.component.html',
  styleUrls: ['./article-features.component.scss']
})
export class ArticleFeaturesComponent implements OnInit {
  listArticle: Article[];

  constructor() { }

  ngOnInit(): void {
    this.listArticle = Articles;
  }

}
