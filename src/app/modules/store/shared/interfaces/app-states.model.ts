import { SearchModule } from '../../search/search.module';
import { CartModel } from './cart.model';

export interface AppStatesModel {
    cart: CartModel;
    search: SearchModule;
  }