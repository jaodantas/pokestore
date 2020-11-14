import { createAction, props } from '@ngrx/store';
import { SearchModel } from '../interfaces/search.model';

export const send = createAction(
    '[Search Component] Send',
    props<{ search: SearchModel }>()
);