import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PokemonModel } from '../shared/interfaces/pokemon.model';
import { StoreApiService } from '../shared/services/store-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  constructor(
    private storeApiService: StoreApiService,
    private formBuilder: FormBuilder,
    ) { }

  public pokemonTypes: Array<any>;
  public pokemonListFull: Array<PokemonModel>;
  public pokemonList$: Subject<Array<PokemonModel>> = new Subject<Array<PokemonModel>>();
  public pokemonListPage: Array<PokemonModel>;
  public itemsPerPage: number = 6;
  public searchForm: FormGroup;

  public ngOnInit(): void {
    this.initForm();
    this.getAllPokemonNameFromType(10);
  }

  public initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: ''
    })
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

  public onSubmit(event): void {
    this.pokemonList$.next(event.name ? 
      this.pokemonListFull.filter(pokemon => pokemon.name === event.name) : this.pokemonListFull
    );
  }

}
