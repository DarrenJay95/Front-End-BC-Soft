import { ComboboxItem } from "@mantine/core";
import { useReducer, useState, useEffect, useMemo } from "react";
import { getPokemon } from "../../../Services/Pokemon";
import { pokemonReducer, pokemonListDefaultState, POKEMON_ACTION } from "./pokemon.reducer";

export function usePokemonList() {
    const [pokemonModel, dispatch] = useReducer(
        pokemonReducer,
        pokemonListDefaultState
      );
      const [selectedPokemonList, setSelectedPokemonList] = useState<string[]>([]);
      const [currentSelected, setCurrentSelected] = useState<string[]>([]);
    
      const handleAddPokemon = () => {
        dispatch({ type: POKEMON_ACTION.add, payload: selectedPokemonList });
        setSelectedPokemonList([]);
      };
      const handleRemovePokemon = () => {
        dispatch({ type: POKEMON_ACTION.delete, payload: currentSelected });
        setCurrentSelected([]);
      };
    
      useEffect(() => {
        getPokemon().then((res) =>
          dispatch({ type: POKEMON_ACTION.save, payload: res })
        );
      }, []);
    
      const options = useMemo(() => {
        return pokemonModel.list
            ?.reduce((acc, { name })=>{
                const isToFilter = pokemonModel.selectedList?.includes(name);
                if(isToFilter) return acc;
                return acc.concat({ label: name, value: name})
            }, [] as ComboboxItem[]);
    
        //   ?.filter(({ name }) => !pokemonModel.selectedList?.includes(name))
        //   .map((el) => ({ label: el.name, value: el.name }));
    
    
      }, [pokemonModel.list, pokemonModel.selectedList]);
    return {
        handleAddPokemon,
        handleRemovePokemon,
        options,
        selectedPokemonList,
        setSelectedPokemonList,
        pokemonModel,
        currentSelected,
        setCurrentSelected
    };
}