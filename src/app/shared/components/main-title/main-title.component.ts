import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {
  @Input() matIcon;
  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
