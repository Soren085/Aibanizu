import { Component, OnInit, Input } from '@angular/core';
import { Assets } from 'src/app/core/constants/constants';


@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  public assets;
  @Input() isDrawerOpened: boolean;

  constructor() { }

  ngOnInit(): void {
    this.assets = Assets;
  }

  public openState(e: boolean) {
    this.isDrawerOpened = e;
  }

}
