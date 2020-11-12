import { Injectable, ɵPlayState } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { apiConfig } from 'src/app/core/shared/api-config';
import { ApiService } from 'src/app/core/shared/services/api.service';
import { PokemonModel } from '../interfaces/pokemon.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private apiService: ApiService,
    private storeService: StoreService) { }

  public getPokemon(id: number): Observable<any> {
    const payload = { id };
    return this.apiService.get(apiConfig.get_pokemon, payload);
  }

  public getAllTypes(): Observable<any> {
    return this.apiService.get(apiConfig.get_types)
      .pipe(
        pluck('results'),
        map((types: any) => {
          return types.map((t) => ({ id: this.storeService.retrieveId(t.url), ...t }))
        })
      )
  }

  public getAllPokemonsFromType(typeId: number): Observable<any> {
    const payload = { typeId };
    return this.apiService.get(apiConfig.get_types, payload)
      .pipe(
        pluck('pokemon'),
        map((pokemonList: any) => {
          return pokemonList.map((p) => ({ id: this.storeService.retrieveId(p.pokemon.url), name: p.pokemon.name }))
        })
      )
  }

  public getPokemonByIdOrName(id: string): Observable<any> {
    const payload = { id };
    return this.apiService.get(apiConfig.get_pokemon, payload)
      .pipe(
        map((pokemon: any) => {
          const types = pokemon.types.map(t => ({ name: t.type.name, id: this.storeService.retrieveId(t.type.url) }));

          return <PokemonModel>{
            id: pokemon.id,
            name: pokemon.name,
            types: types,
            price: pokemon.weight,
            img: pokemon.sprites.other.dream_world.front_default,
          }
        })
      )
  }

}
