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
    this.drawerSubscription = this.data.currentState.subscribe(
      res => {
        this.iconChangeState(res);
      }
    );
  }

  ngOnDestroy(): void {
    this.drawerSubscription.unsubscribe();
  }

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
    // this.iconRegistry.addSvgIcon(
    //   'electric-guitar',
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-svg/electric-guitar.svg'));

  }

  private iconChangeState(drawerState: boolean): void {
    if (drawerState) {
      this.isDrawerOpened = drawerState;
    } else {
      setTimeout(() => {
        this.isDrawerOpened = drawerState;
      }, 300);
    }
  }

}
