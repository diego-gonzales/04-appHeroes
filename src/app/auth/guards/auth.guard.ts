import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
               private router: Router ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.authService.verifyAuthentication()
              .pipe(
                tap( resp => {
                  if ( !resp ) {
                    this.router.navigate(['./auth/login']);
                  };
                })
              )

    // if (this.authService.userAuth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por AuthGuard - CanActivate');
    // return false;
  };

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verifyAuthentication()
              .pipe(
                tap( resp => {
                  if ( !resp ) {
                    this.router.navigate(['./auth/login']);
                  };
                })
              )
          
    // if (this.authService.userAuth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por AuthGuard - CanLoad');
    // return false;
  };

}
