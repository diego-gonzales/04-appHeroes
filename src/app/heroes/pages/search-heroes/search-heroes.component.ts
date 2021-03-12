import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { HeroResponse } from '../../interfaces/hero-response.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styles: [
  ]
})
export class SearchHeroesComponent implements OnInit {

  arrayHeroes: HeroResponse[] = [];
  hero: HeroResponse | undefined;
  termino: string = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searchHero() {
    this.heroesService.getHeroesSuggestions( this.termino.trim() )
        .subscribe( resp => this.arrayHeroes = resp )  
  };

  // Esto es como en el video 196 de curso Angular
  // myOptionSelected( evento: MatAutocompleteSelectedEvent ) {
  //   if ( !evento.option.value ) { return };

  //   const hero: HeroResponse = evento.option.value;
  //   this.termino = hero.superhero;

  //   this.heroesService.getHeroById(hero.id!)
  //       .subscribe( resp => {
  //         this.heroSelected = resp;
  //         console.log('abcac')
  //       } )
  // };

  // esto es mi codigo: se puede hacer con el evento propio de matautocomplete (optionSelected)
  // pero otra manera de hacerlo seria solo tomar el valor del this.termino y enviarlo en ves de evento.option.value
  myOptionSelected( evento: MatAutocompleteSelectedEvent ) {
    if ( !evento.option.value ) { 
      this.hero = undefined;
      return
    };
    // console.log(evento.option.value);
    console.log(this.termino);

    this.heroesService.getHeroByName(evento.option.value)
        .subscribe(resp => {
          this.hero = resp;
          console.log(resp);
        })
  }
}
