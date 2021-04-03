import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


import { Auth } from '../interfaces/auth.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAPI = environment.urlAPI;
  private _userAuth: Auth | undefined;

  get userAuth() {
    return {...this._userAuth};
  };

  constructor( private http: HttpClient ) { }

  getUser(): Observable<Auth> {
    return this.http.get<Auth>(`${this.urlAPI}/usuarios/1`)
              .pipe(
                tap( resp => this._userAuth = resp ), // este tap solo sirve para guardar los datos en _userAuth

                // esto lo hacemos para simular el token y mantener un sesion iniciada
                tap( resp => localStorage.setItem('token', resp.id) )
              )
  };


  // Metodo que me ayudara a mantener sesion iniciada si el usuario ya se ha logueado, es decir que su token se almacenó en localstorage
  verifyAuthentication(): Observable<boolean> {
    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    // Hago de nuevo la peticion porque eso me servira para no perder los datos del usuario, en este caso userAuth, el cual uso
    // para mostrar el nombre del usario que inicio sesion (ver home.component.html). Sino solo haria un return de of(true)
    return this.http.get<Auth>(`${this.urlAPI}/usuarios/1`)
                .pipe(
                  map( resp => {
                    this._userAuth = resp;
                    return true; // aca ya no le pongo el of() porque esto de por si ya es un Observable
                  })
                )

    // return of(true);
  };

  // Esto solo el para probar el canLoad
  logoutcito() {
    this._userAuth = undefined;
  };


}
