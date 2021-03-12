import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { DetailHeroComponent } from './pages/detail-hero/detail-hero.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHeroesComponent,
    children: [
      {
        path: 'list',
        component: ListHeroesComponent
      },
      {
        path: 'add',
        component: AddHeroComponent
      },
      {
        path: 'edit/:idHero',
        component: AddHeroComponent
      },
      {
        path: 'search',
        component: SearchHeroesComponent
      },
      {
        path: ':idHero',
        component: DetailHeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
