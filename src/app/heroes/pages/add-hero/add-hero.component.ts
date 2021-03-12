import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroResponse, Publisher } from '../../interfaces/hero-response.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class AddHeroComponent implements OnInit {

  // Variables
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  hero: HeroResponse = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  idParam: string = '';

  // Constructor
  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private dialog: MatDialog ) { }

  ngOnInit(): void {
    // Esta es una mejor manera de hacerlo a mi parecer, para evitar que salga errores en consola al estar en el modo nuevo,
    // ya que ahi no tenemos el parametro de la URL 'idHero'
    if ( this.router.url.includes('edit') ) {
      this.activatedRoute.params
          .pipe(
            switchMap( ( {idHero} ) => this.heroesService.getHeroById(idHero) )
          )
          .subscribe( resp => {
            // if (!resp) { return };
  
            this.hero = resp;
          })
    };
  };

  // Methods
  saveNewHero() {

    if ( !this.hero.superhero || !this.hero.alt_img ) { return };

    // este if-else me va a servir como bandera para saber si editar o crear un nuevo heroe
    if ( this.hero.id ) {
      console.log('modo editar');

      this.heroesService.putHero(this.hero)
          .subscribe( resp => {
            console.log(resp);
            this.showSnackBar('Hero Updated');
            this.router.navigate(['/heroes/list']);
          })

    } else {
      console.log('modo nuevo');
  
      this.heroesService.postHero(this.hero)
          .subscribe( (resp) => {
            console.log(resp);
            this.showSnackBar('Hero Added');
            this.router.navigate(['/heroes/list']);
            // this.hero = {
            //   superhero: '',
            //   alter_ego: '',
            //   characters: '',
            //   first_appearance: '',
            //   publisher: Publisher.DCComics,
            //   alt_img: ''
            // };
          })
    }
  };


  deleteHero() {

    // Hacemos uso del MatDialog de AngularMaterial para mostrar un mensaje de confirmacion (video 210)
    const dialogRef = this.dialog.open(ConfirmComponent, { data: {...this.hero} });

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this.heroesService.deleteHero( this.hero.id! )
            .subscribe( resp => {
              this.showSnackBar('Hero Deleted')
              this.router.navigate(['/heroes/list']);
            })
      };
    });

  };

  // Method to show the snackbar
  showSnackBar( message: string ) {
    this.snackBar.open(message, 'Ok', {
      duration: 2500
    })
  };
}
