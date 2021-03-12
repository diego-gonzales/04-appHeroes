import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroResponse } from '../../interfaces/hero-response.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  // Manera de traer la informacion del padre, en este caso de add-hero.component.ts (ver metodo deleteHero ahi)
  constructor(@Inject(MAT_DIALOG_DATA) public data: HeroResponse) { }

  ngOnInit(): void {
  }

}
