import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImpressionComponent } from './components/screens/impression/impression.component';
import { ArtistsComponent } from './components/screens/artists/artists.component';
import { AuthorComponent } from './components/screens/author/author.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { ArticleDetailComponent } from './components/screens/details/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'impression',
        component: ImpressionComponent
      },
      {
        path: 'guitar',
        loadChildren:  () => import('src/app/home/components/screens/guitar/guitar.module').then(m => m.GuitarModule),
      },
      {
        path: 'artists',
        component: ArtistsComponent
      },
      {
        path: 'author',
        component: AuthorComponent
      },
      {
        path: 'details',
        component: ArticleDetailComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
