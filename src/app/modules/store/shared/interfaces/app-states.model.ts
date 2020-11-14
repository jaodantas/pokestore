import { SearchModule } from '../../search/search.module';
import { CartModel } from './cart.model';
import { CatalogModel } from './catalog.model';

export interface AppStatesModel {
    cart: CartModel;
    search: SearchModule;
    catalog: CatalogModel;
  }