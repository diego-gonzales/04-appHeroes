import { Component, Input, OnInit } from '@angular/core';
import { HeroResponse } from '../../interfaces/hero-response.interface';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styles: [
    `
      mat-card {
        margin: 20px;
      }
    `
  ]
})
export class HeroTarjetaComponent implements OnInit {

  @Input('heroChild') hero!: HeroResponse;


  constructor() { }

  ngOnInit(): void {
  }

}
