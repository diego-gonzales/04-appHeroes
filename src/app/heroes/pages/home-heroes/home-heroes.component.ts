import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

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

  get user() {
    return this.authService.userAuth;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  logout() {

    this.router.navigateByUrl('/auth');
  }
}
