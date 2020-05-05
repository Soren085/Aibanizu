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
import { ArtistsComponent } from './components/screens/artists/artists.component';
import { AuthorComponent } from './components/screens/author/author.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { HomeArticlesComponent } from './components/screens/home-screen/parts/home-articles/home-articles.component';
import { HomePlayerComponent } from './components/screens/home-screen/parts/home-player/home-player.component';
import {
  ArticleFeaturesComponent
} from './components/screens/home-screen/parts/home-articles/parts/article-features/article-features.component';

const Components = [
  HomeComponent,
  TopNavigationComponent,
  SidebarComponent,
  ImpressionComponent,
  GuitarComponent,
  SidebarContentComponent,
  ArtistsComponent,
  AuthorComponent,
  HomeScreenComponent,
  HomeArticlesComponent,
  HomePlayerComponent,
  ArticleFeaturesComponent
];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
