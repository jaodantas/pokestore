import { createReducer, on } from '@ngrx/store';
import { change } from '../actions/type.actions'
import { TypeModel } from '../interfaces/type.model';

export const typeState: TypeModel = { 
    name: 'water',
    id: '11',
};

const _typeReducer = createReducer(typeState,
  on(change, (state, { pokemonType }) => (pokemonType)),
);

export function typeReducer(state, action) {
  return _typeReducer(state, action);
}