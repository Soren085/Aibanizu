import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { Articles } from 'src/app/core/mock-up/mock-up';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.scss']
})
export class HomeArticlesComponent implements OnInit {
  listArticle: Article[];

  constructor() { }

  ngOnInit(): void {
    this.listArticle = Articles;
  }

}
