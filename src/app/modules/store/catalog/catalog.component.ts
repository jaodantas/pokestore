import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokemonModel } from '../shared/interfaces/pokemon.model';
import { SearchModel } from '../shared/interfaces/search.model';
import { StoreApiService } from '../shared/services/store-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  public search$: Observable<SearchModel>;

  constructor(
    private storeApiService: StoreApiService,
    private store: Store<{search: SearchModel}>
  ) { 
    this.search$ = this.store.pipe(select('search'));
  }

  public pokemonTypes: Array<any>;
  public pokemonListFull: Array<PokemonModel>;
  public pokemonList$: Subject<Array<PokemonModel>> = new Subject<Array<PokemonModel>>();
  public pokemonListPage: Array<PokemonModel>;
  public itemsPerPage: number = 6;

  public ngOnInit(): void {
    this.onSearchListening();
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
      tap(pokemons => this.pokemonList$.next(pokemons)),
    ).subscribe();
  }

  public updateActualItems(event): void {
      this.pokemonListPage = event;
  }

  public onSearchListening(): void {
    this.search$.pipe(
      map(({ name }) => {
        this.pokemonList$.next(name ? 
          this.pokemonListFull.filter(pokemon => pokemon.name === name) : this.pokemonListFull
        );
      })
    ).subscribe();
  }

}
