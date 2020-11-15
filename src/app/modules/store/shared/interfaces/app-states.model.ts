import { SearchModule } from '../../search/search.module';
import { CartModel } from './cart.model';
import { CatalogModel } from './catalog.model';
import { TypeModel } from './type.model';

export interface AppStatesModel {
    cart: CartModel;
    search: SearchModule;
    catalog: CatalogModel;
    pokemonType: TypeModel;
  }