import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonModel } from '../../shared/interfaces/pokemon.model';
import { StoreApiService } from '../../shared/services/store-api.service';
import { add } from '../../shared/actions/cart.actions'
import { CartModel } from '../../shared/interfaces/cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() pokemonId: string;
  public pokemon$: Observable<PokemonModel>;
  public isLoading: boolean = false;
  
  constructor(private storeApiService: StoreApiService,
    private store: Store<CartModel>) { }

  public ngOnInit(): void {
    this.getPokemonById(this.pokemonId)
  }

  public getPokemonById(id): void {
    this.pokemon$ = this.storeApiService.getPokemonByIdOrName(id);
  }

  public add(pokemon): void {
    this.store.dispatch(add({ pokemon }));
  }

}
