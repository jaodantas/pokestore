import { PokemonModel } from './pokemon.model';

export interface CartModel {
    total: number;
    items: Array<PokemonModel>;
    pokemon?: PokemonModel;
}