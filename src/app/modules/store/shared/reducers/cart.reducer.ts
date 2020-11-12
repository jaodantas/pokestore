import { createReducer, on } from '@ngrx/store';
import { add, decrement, clean } from '../actions/cart.actions';
import { CartModel } from '../interfaces/cart.model';
import { PokemonModel } from '../interfaces/pokemon.model';

export const initialState: CartModel = { 
    total: 0,
    items: []
};

const _cartReducer = createReducer(initialState,
  on(add, (state, { pokemon }) => {
    return { items: increaseItem(state.items, pokemon), total: getTotal([ ...state.items, pokemon]) }
  }),
  on(decrement, (state, { pokemon }) => {
    return { items: decreaseItem(state.items, pokemon), total: getTotal([ ...state.items, pokemon]) }
  }),
  on(clean, state => (initialState)),
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}

const getTotal = (items: Array<any>): number => {
  return items.reduce((prev, cur) => {
    return prev.price + cur.price;
  });
}

const increaseItem = (items: Array<PokemonModel>, newItem: PokemonModel): Array<PokemonModel> => {

  let itemsArray = items.map(i => ({ ...i }));
  const index = itemsArray.findIndex( i => i.id === newItem.id);
  
  if (index !== -1) {
    itemsArray[index] = { ...itemsArray[index], quantity: itemsArray[index].quantity + 1 };
    return itemsArray;
  } else {
    return [ ...itemsArray, { ...newItem, quantity: 1 } ];
  }
    
}


const decreaseItem = (items: Array<PokemonModel>, newItem: PokemonModel): Array<PokemonModel> => {

  let itemsArray = items.map(i => ({ ...i }));
  const index = itemsArray.findIndex( i => i.id === newItem.id);
  
  if (index !== -1) {

    if (itemsArray[index].quantity > 1) {
      itemsArray[index] = { ...itemsArray[index], quantity: itemsArray[index].quantity - 1 };
    } else if (itemsArray[index].quantity <= 1) {
      itemsArray.splice(index, 1);
    }

    return itemsArray;
  }
    
}