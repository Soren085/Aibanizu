import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/services/data/data.service';
import { DrawerState, Navigations } from '../core/constants/constants';
import { Navigation } from '../core/models/navigation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public routes: Navigation[];
  public class = true;
  public assets;
  public drawerInitialState;
  public isDrawerOpened: boolean;
  private drawerSubscription: Subscription;
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private data: DataService,
    // protected httpClient?: HttpClient
  ) { }

  ngOnInit(): void {
    this.registSvgIcon();
    this.drawerInitialState = DrawerState.Open;
    this.data.changeState(DrawerState.Open);
    this.routes = Navigations;
    this.appendChildRoute();
    this.drawerSubscription = this.data.currentState.subscribe(
      res => {
        this.iconChangeState(res);
      }
    );
  }

  ngOnDestroy(): void {
    this.drawerSubscription.unsubscribe();
  }

  /** add all svg icons */
  private registSvgIcon(): void {
    Navigations.forEach(menuItem => {
      this.iconRegistry.addSvgIcon(
        menuItem.icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(menuItem.iconAsset));
      if (menuItem.hasChild) {
        menuItem.children.forEach(child => {
          this.iconRegistry.addSvgIcon(
            child.icon,
            this.sanitizer.bypassSecurityTrustResourceUrl(child.iconAsset));
        });
      }
    });

    this.iconRegistry.addSvgIcon(
      'menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-svg/menu.svg'));
  }

  private iconChangeState(drawerState: boolean): void {
    if (drawerState === DrawerState.Open) {
      setTimeout(() => {
        this.isDrawerOpened = drawerState;
      }, 50);
    } else {
      setTimeout(() => {
        this.isDrawerOpened = drawerState;
      }, 300);
    }
  }

  private appendChildRoute() {
    this.routes.forEach(routeItem => {
      if (routeItem.hasChild) {
        routeItem.children.forEach(child => {
          child.route = routeItem.route + '/' + child.route;
        });
      }
    });
  }

}
