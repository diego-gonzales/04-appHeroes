import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroResponse } from '../../interfaces/hero-response.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
      .mi-container-detail {
        margin: 20px;
      }
    `
  ]
})
export class DetailHeroComponent implements OnInit {

  hero!: HeroResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ( {idHero} ) => this.heroesService.getHeroById(idHero) )
        )
        .subscribe( resp => this.hero = resp )
  }


  back() {
    // this.router.navigate( ['/heroes/list'] );

    // Uso mejor el back() propio de JS ya que podre ir al detalle no solo desde la lista de heroes, sino tambien al buscar un
    // heroe, es por eso que necesito ir de regreso a la pagina que me trajo al detalle
    window.history.back();
  }

}
