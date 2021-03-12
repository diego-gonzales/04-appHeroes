import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroResponse } from '../../interfaces/hero-response.interface';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styles: []
})
export class ListHeroesComponent implements OnInit {

  arrayHeroes: HeroResponse[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
        .subscribe( resp => {
          console.log(resp);
          this.arrayHeroes = resp;
        })
  }



}
