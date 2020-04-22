import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { Assets } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public assets;
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    // protected httpClient?: HttpClient
  ) { }

  ngOnInit(): void {
    this.registSvgIcon();
    this.assets = Assets;
  }

  private registSvgIcon() {
    this.iconRegistry.addSvgIcon(
      'dark-theme-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-svg/dark-theme-logo.svg'));
  }

}
