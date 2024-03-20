import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pokeService } from './services/poke.service';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cheito';
  pokemonList: any[] = []

  constructor(private pokeservice: pokeService) { }
  ngOnInit() {
    this.getPokemon()
  }

  getPokemon() {
    this.pokeservice.getPkmn().subscribe((data: any) => {
      console.log(data)
      data.results.forEach((pokemon: any) => {
        this.pokeservice.getPkmnDetails(pokemon.url).subscribe((details: any) => {
          const pokemonInfo = {
            name: details.name,
            type: details.types[0].type.name,
            sprite: details.sprites.front_default
          };
          this.pokemonList.push(pokemonInfo);
        });
      });
      console.log(this.pokemonList)
      pokeService
    });
  }


  //// metodos anteriores
  // pokemonData: any;
  // constructor(
  //   private pokeservice: pokeService,
  //   private http: HttpClient
  // ){}

  // ngOnInit() {
  // this.pokeservice.getPkmn()
  // .subscribe(
  //   (details=>{
  //     this.pokemonNames = details;
  //     console.log(details);

  //   })
  // )}
}
