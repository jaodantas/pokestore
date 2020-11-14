import { createAction, props } from '@ngrx/store';
import { CatalogModel } from '../interfaces/catalog.model';

export const setAll = createAction(
    '[Catalog Component] setAll',
    props<{ catalog: CatalogModel }>()
);

export const setPage = createAction(
    '[Catalog Component] setPage',
    props<{ catalog: CatalogModel }>()
);

