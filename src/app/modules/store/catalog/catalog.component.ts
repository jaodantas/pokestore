import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { setAll } from '../shared/actions/catalog.actions';
import { CatalogModel } from '../shared/interfaces/catalog.model';
import { PokemonModel } from '../shared/interfaces/pokemon.model';
import { SearchModel } from '../shared/interfaces/search.model';
import { TypeModel } from '../shared/interfaces/type.model';
import { StoreApiService } from '../shared/services/store-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  public catalog$: Observable<CatalogModel>;
  public pokemonType$: Observable<TypeModel>;

  constructor(
    private storeApiService: StoreApiService,
    private store: Store<any>
  ) { 
    this.catalog$ = this.store.pipe(select('catalog'));
    this.pokemonType$ = this.store.pipe(select('pokemonType'));
  }

  public pokemonTypes: Array<any>;
  public pokemonListFull: Array<PokemonModel>;
  public pokemonListPage$: Observable<Array<PokemonModel>>;
  public itemsPerPage: number = 6;

  public ngOnInit(): void {
    this.updateActualItems();

    this.pokemonType$.pipe(
      map(type => {
        this.getAllPokemonNameFromType(type.id);
      })
    ).subscribe();
  }

  public getTypes(): void {
    this.storeApiService.getAllTypes().pipe(
      tap(types => this.pokemonTypes = types)
    ).subscribe();
  }

  public getAllPokemonNameFromType(typeId): void {
    this.storeApiService.getAllPokemonsFromType(typeId).pipe(
      map(pokemons => {
        this.store.dispatch(
          setAll({ 
            catalog: {
              full: pokemons,
              page: [],
            }
          }));
        this.pokemonListFull = pokemons;
      })
    ).subscribe();
  }

  public updateActualItems(): void {
    this.pokemonListPage$ = this.catalog$.pipe(
        pluck('page'),
      );
  }

}
