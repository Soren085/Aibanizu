import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopNavigationComponent } from './components/home-parts/top-navigation/top-navigation.component';
import { SidebarComponent } from './components/home-parts/sidebar/sidebar.component';



@NgModule({
  declarations: [HomeComponent, TopNavigationComponent, SidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
