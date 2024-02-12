import { PokemonList, PokemonListResponse } from "../../../Services/Dto";

export interface PokemonModel {
    list?: PokemonList[],
    selectedList?: string[],
    pagination?: Pick<PokemonListResponse, 'next' | 'previous'>
}

 