import { createAction, props } from '@ngrx/store';
import { TypeModel } from '../interfaces/type.model';

export const change = createAction(
    '[Menu Component] Change',
    props<{ pokemonType: TypeModel }>()
);