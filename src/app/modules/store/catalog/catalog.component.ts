import { Component, OnInit } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { StoreApiService } from '../shared/services/store-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  constructor(private storeApiService: StoreApiService) { }

  public pokemonTypes: Array<any>;
  public pokemonList: Array<any>;

  public ngOnInit(): void {
    this.getTypes();
    this.getAllPokemonFromType(10);
  }

  public getTypes(): void {
    this.storeApiService.getAllTypes().pipe(
      tap(types => this.pokemonTypes = types)
    ).subscribe();
  }

  public getAllPokemonFromType(typeId): void {
    this.storeApiService.getAllPokemonsFromType(typeId).pipe(
      tap(pokemons => this.pokemonList = pokemons)
    ).subscribe();
  }

}
