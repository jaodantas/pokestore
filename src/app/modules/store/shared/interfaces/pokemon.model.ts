import { TypeModel } from './types.model';

export interface PokemonModel {
    id: string;
    name: string;
    types: Array<TypeModel>,
    img: string;
    price: string;
}