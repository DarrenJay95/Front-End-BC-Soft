import { PokemonList, PokemonListResponse } from "../../../Services/Dto";

export interface PokemonModel {
    list?: PokemonList[],
    selectedList?: PokemonList[],
    pagination?: Pick<PokemonListResponse, 'next' | 'previous'>
}

 