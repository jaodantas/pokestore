import { createAction, props } from '@ngrx/store';
import { PokemonModel } from '../interfaces/pokemon.model';

export const add = createAction(
    '[Cart Component] Add',
    props<{ pokemon: PokemonModel }>()
    );
export const remove = createAction('[Cart Component] Remove');
export const clean = createAction('[Cart Component] Clean');