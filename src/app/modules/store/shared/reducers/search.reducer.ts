import { createReducer, on } from '@ngrx/store';
import { send } from '../actions/search.actions';
import { SearchModel } from '../interfaces/search.model';

export const searchState: SearchModel = { 
    name: ''
};

const _searchReducer = createReducer(searchState,
  on(send, (state, { search }) => (search)),
);

export function searchReducer(state, action) {
  return _searchReducer(state, action);
}