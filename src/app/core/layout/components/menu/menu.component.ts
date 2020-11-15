import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { change } from 'src/app/modules/store/shared/actions/type.actions';
import { PokemonTypes } from 'src/app/modules/store/shared/enums/types.enum';
import { TypeModel } from 'src/app/modules/store/shared/interfaces/type.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  public pokemonTypes: any = Object.entries(PokemonTypes);
  constructor(private store: Store<{pokemonType: TypeModel}>) { }

  public goType(type: TypeModel): void {
    this.store.dispatch(change({pokemonType: { name: type.name , id: type.id }}));
  }

}
