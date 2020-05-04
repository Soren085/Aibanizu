import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  isHomeDisplayed: boolean;
  url: string;
  routeSubscription: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.displayHomeOnRouteChange();
  }

  private displayHomeOnRouteChange() {
    this.url = this.router.url.replace(/\/home/, '');
    this.isHomeDisplayed = !this.url ? true : false;

    this.routeSubscription = this.router.events.subscribe(
      route => {
        if (route instanceof NavigationEnd) {
          const navigatedUrl = route.url.replace(/^\//, '');
          this.isHomeDisplayed = !navigatedUrl ? true : false;
        }
      }
    );
  }

}
