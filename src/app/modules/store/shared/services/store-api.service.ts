import { Injectable, ɵPlayState } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { apiConfig } from 'src/app/core/shared/api-config';
import { ApiService } from 'src/app/core/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private apiService: ApiService) { }

  public getPokemon(id: number): Observable<any> {
    const payload = { id };
    return this.apiService.get(apiConfig.get_pokemon, payload);
  }

  public getAllTypes(): Observable<any> {
    return this.apiService.get(apiConfig.get_types)
      .pipe(
        pluck('results'),
        map((types: any) => {
          return types.map((t) => ({ id: this.retrieveId(t.url), ...t }))
        })
      )
  }

  public getAllPokemonsFromType(typeId: number): Observable<any> {
    const payload = { typeId };
    return this.apiService.get(apiConfig.get_types, payload)
      .pipe(
        pluck('pokemon'),
        map((pokemonList: any) => {
          return pokemonList.map((p) => ({ id: this.retrieveId(p.pokemon.url), name: p.pokemon.name }))
        })
      )
  }

  private retrieveId(urlId): string {
    return urlId.split('/').slice(-2)[0];
  }


}
