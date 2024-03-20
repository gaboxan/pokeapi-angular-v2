import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

import { Observable, map, mergeMap, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class pokeService {




  constructor(private http: HttpClient) { }

  //// petición para los primeros 20 nombres
  getPkmn(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    
    ;
  }
  getPkmnDetails(url:string):Observable<any>{
    return this.http.get(url)
  }
  ///peticion con forkjoin
  // return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=20').pipe(
  //   switchMap(response => {

  //     const pkmnArr = response.results.map((pokemon: any) => {
  //       return this.http.get<any>(pokemon.url).pipe(
  //         map(pkmnDetails => {
  //           return {
  //             name: pokemon.name,
  //             types: pkmnDetails.types.map((typeInfo: any) => typeInfo.type.name)         sprites: pkmnDetails.sprites
  //           }
  //         })
  //       )
  //     })
  //     return forkJoin(pkmnArr)
  //   })

  // );

}

