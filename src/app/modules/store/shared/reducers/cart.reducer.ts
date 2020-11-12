import { createReducer, on } from '@ngrx/store';
import { add, remove, clean } from '../actions/cart.actions';
import { CartModel } from '../interfaces/cart.model';
import { PokemonModel } from '../interfaces/pokemon.model';

export const initialState: CartModel = { 
    total: 0,
    items: []
};

const _cartReducer = createReducer(initialState,
  on(add, (state, { pokemon }) => {
    return { items: [ ...state.items, pokemon], total: getTotal([ ...state.items, pokemon]) }
  }),
//   on(decrement, state => state - 1),
//   on(reset, state => 0),
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}

const getTotal = (items: Array<any>): number => {
    const res = items.reduce((prev, cur) => {
      return prev.price + cur.price
    });
    
    debugger;
    return res;
}