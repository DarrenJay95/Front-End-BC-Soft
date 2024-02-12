import { PokemonListResponse } from "../Dto";
import { Endpoints } from "../endpoints";


export const getPokemon = async (): Promise<PokemonListResponse | undefined> => {
  try {
    const promise = await fetch(Endpoints.pokemonList);
    const response = await promise.json();
    return response;
  } catch (error) {
    console.log("🚀 ~ getPokemon ~ error:", error);
  }
};
