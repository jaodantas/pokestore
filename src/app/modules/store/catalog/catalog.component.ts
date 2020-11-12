import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PokemonModel } from '../shared/interfaces/pokemon.model';
import { StoreApiService } from '../shared/services/store-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  constructor(private storeApiService: StoreApiService) { }

  public pokemonTypes: Array<any>;
  public pokemonListFull: Array<PokemonModel>;
  public pokemonListPage: Array<PokemonModel>;
  public itemsPerPage: number = 6;

  public ngOnInit(): void {
    // this.getTypes();
    this.getAllPokemonNameFromType(10);
  }

  public getTypes(): void {
    this.storeApiService.getAllTypes().pipe(
      tap(types => this.pokemonTypes = types)
    ).subscribe();
  }

  public getAllPokemonNameFromType(typeId): void {
    this.storeApiService.getAllPokemonsFromType(typeId).pipe(
      tap(pokemons => this.pokemonListFull = pokemons),
    ).subscribe();
  }

  public updateActualItems(event): void {
    this.pokemonListPage = event;
  }


}
