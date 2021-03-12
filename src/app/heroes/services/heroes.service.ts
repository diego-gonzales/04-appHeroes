import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeroResponse } from '../interfaces/hero-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  get urlAPI(): string {
    return environment.urlAPI;
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroResponse[]> {
     return this.http.get<HeroResponse[]>(`${this.urlAPI}/heroes`);
  };

  getHeroById( idHero: string ): Observable<HeroResponse> {
    return this.http.get<HeroResponse>(`${this.urlAPI}/heroes/${idHero}`);
  };

  getHeroesSuggestions( termino: string ): Observable<HeroResponse[]> {
    const params = new HttpParams()
          .set('q', termino)
          .set('_limit', '5');

    return this.http.get<HeroResponse[]>(`${this.urlAPI}/heroes`, { params });
  };

  getHeroByName( nameHero: string ): Observable<HeroResponse> {
    const params = new HttpParams()
          .set('q', nameHero)
          .set('limit', '1')

    return this.http.get<HeroResponse[]>(`${this.urlAPI}/heroes`, { params })
            .pipe(
              map( resp => resp[0] )
            )
  };

  postHero( newHero: HeroResponse ): Observable<HeroResponse> {
    return this.http.post<HeroResponse>(`${this.urlAPI}/heroes`, newHero);
  };

  putHero( heroUpdated: HeroResponse): Observable<HeroResponse> {
    return this.http.put<HeroResponse>( `${this.urlAPI}/heroes/${heroUpdated.id}`, heroUpdated);
  };

  deleteHero( idHero: string ): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/heroes/${idHero}`);
  };

}
