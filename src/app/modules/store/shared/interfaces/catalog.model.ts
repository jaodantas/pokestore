import { PokemonModel } from './pokemon.model';

export interface CatalogModel {
    full: Array<PokemonModel>;
    page: Array<PokemonModel>;
}