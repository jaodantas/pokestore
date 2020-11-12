import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../../shared/interfaces/pokemon.model';
import { StoreApiService } from '../../shared/services/store-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() pokemonId: string;
  public pokemon$: Observable<PokemonModel>;
  public isLoading: boolean = false;
  
  constructor(private storeApiService: StoreApiService) { }

  public ngOnInit(): void {
    this.getPokemonById(this.pokemonId)
  }

  public getPokemonById(id): void {
    this.pokemon$ = this.storeApiService.getPokemonByIdOrName(id);
  }

}
