import { TypeModel } from './type.model';

export interface PokemonModel {
    id: string;
    name: string;
    types: Array<TypeModel>,
    img: string;
    price: string;
    quantity?: number;
}