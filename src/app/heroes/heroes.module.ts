import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { DetailHeroComponent } from './pages/detail-hero/detail-hero.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroTarjetaComponent } from './components/hero-tarjeta/hero-tarjeta.component';

import { ImagePipe } from './pipes/image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroesComponent,
    DetailHeroComponent,
    HomeHeroesComponent,
    ListHeroesComponent,
    HeroTarjetaComponent,
    ImagePipe,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
