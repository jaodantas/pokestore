import { createReducer, on } from '@ngrx/store';
import { setAll, setPage } from '../actions/catalog.actions';
import { CatalogModel } from '../interfaces/catalog.model';

export const catalogState: CatalogModel = { 
    full: [],
    page: []
};

const _catalogReducer = createReducer(catalogState,
  on(setAll, (state, { catalog }) => ( { ...state, full: catalog.full })),
  on(setPage, (state, { catalog }) => ( { ...state, page: catalog.page })),
);

export function catalogReducer(state, action) {
  return _catalogReducer(state, action);
}