import { createAction, props } from '@ngrx/store';
import { PokemonModel } from '../interfaces/pokemon.model';

export const add = createAction(
    '[Cart Component] Add',
    props<{ pokemon: PokemonModel }>()
);

export const decrement = createAction(
    '[Cart Component] Decrement',
    props<{ pokemon: PokemonModel }>()
);

export const clean = createAction('[Cart Component] Clean');