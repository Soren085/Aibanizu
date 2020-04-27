import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopNavigationComponent } from './components/home-parts/top-navigation/top-navigation.component';
import { SidebarComponent } from './components/home-parts/sidebar/sidebar.component';
import { ImpressionComponent } from './components/screens/impression/impression.component';
import { GuitarComponent } from './components/screens/guitar/guitar.component';
import { SidebarContentComponent } from './components/home-parts/sidebar-content/sidebar-content.component';



@NgModule({
  declarations: [HomeComponent, TopNavigationComponent, SidebarComponent, ImpressionComponent, GuitarComponent, SidebarContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
