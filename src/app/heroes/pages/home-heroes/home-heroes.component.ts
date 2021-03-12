import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html',
  styles: [`
      .mi-container {
        margin: 10px;
      }
    `
  ]
})
export class HomeHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
