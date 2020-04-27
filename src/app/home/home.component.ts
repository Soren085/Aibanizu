import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/services/data/data.service';
import { DrawerState, Navigations } from '../core/constants/constants';
import { Navigation } from '../core/models/navigation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public routes: Navigation[];
  public class = true;
  public assets;
  public drawerInitialState;
  public isDrawerOpened: boolean = true;
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private data: DataService,
    // protected httpClient?: HttpClient
  ) { }

  ngOnInit(): void {
    this.registSvgIcon();
    this.drawerInitialState = DrawerState.Open;
    this.data.changeState(true);
    this.routes = Navigations;
  }

  private registSvgIcon() {
    Navigations.forEach(menuItem => {
      this.iconRegistry.addSvgIcon(
        menuItem.icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(menuItem.iconAsset));
    });
    this.iconRegistry.addSvgIcon(
      'menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-svg/menu.svg'));

  }

}
