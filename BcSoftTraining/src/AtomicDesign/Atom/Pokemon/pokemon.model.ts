import { PokemonList, PokemonListResponse } from "../../../Services/Dto";

export interface PokemonModel {
    list?: PokemonList[],
    selectedList?: {value: string, label: string}[],
    pagination?: Pick<PokemonListResponse, 'next' | 'previous'>
}

 