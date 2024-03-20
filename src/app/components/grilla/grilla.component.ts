import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { pokeService } from '../../services/poke.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grilla',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './grilla.component.html',
  styleUrl: './grilla.component.css'
})
export class GrillaComponent {

  pokemonList: any[] = []

  constructor(private pokeservice: pokeService) { }
  ngOnInit() {
    this.getPokemon()
  }

  getPokemon() {
    this.pokeservice.getPkmn().subscribe((data: any) => {
   
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


}
