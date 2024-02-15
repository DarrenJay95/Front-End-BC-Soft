import { PokemonListResponse } from "../../../Services/Dto";
import { PokemonModel } from "./pokemon.model";

export const POKEMON_ACTION = {
  save: "save",
  add: "add",
  delete: "delete"
} as const;

interface Action<T> {
  type: keyof typeof POKEMON_ACTION;
  payload: T;
}

export const pokemonListDefaultState: PokemonModel = {
    selectedList: [],
};

export function pokemonReducer<T>(state: PokemonModel, action: Action<T>) {
  switch (action.type) {
    case POKEMON_ACTION.save: {
      const { next, previous, results } = action.payload as PokemonListResponse;
      return {
        ...state,
        list: results,
        pagination: {
          next,
          previous,
        },
      };
    }
    case POKEMON_ACTION.add:{
        const list = action.payload as string[];
        return {
            ...state,
            selectedList: [...new Set(state.selectedList?.concat(list))]
        }
    }
    case POKEMON_ACTION.delete: {
        const list = action.payload as string[];
        return {
            ...state,
            selectedList: state.selectedList?.filter((value) => !list.includes(value))
        }
    }
    default:
      return pokemonListDefaultState;
  }
}
