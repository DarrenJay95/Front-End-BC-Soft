import { useEffect, useMemo, useReducer, useState } from "react";
import {
  Card,
  Text,
  Button,
  Group,
  SimpleGrid,
  MultiSelect,
  ComboboxItem,
} from "@mantine/core";
import {
  POKEMON_ACTION,
  pokemonListDefaultState,
  pokemonReducer,
} from "./pokemon.reducer";
import { getPokemon } from "../../../Services/Pokemon";

export const Pokemon = () => {
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
  return (
    <Card shadow="md" padding="lg" radius="lg" withBorder w={900}>
      <Text fw={500} ta={"center"} size="xl" mt={"xs"} mb={"md"}>
        Lista Pokemon
      </Text>

      <Group justify="space-evenly">
        <Button variant="light" radius="md" onClick={handleAddPokemon}>
          Aggiungi
        </Button>
        <Button
          color="red"
          variant="light"
          radius="md"
          onClick={handleRemovePokemon}
        >
          Rimuovi
        </Button>
      </Group>

      <Card.Section mt={"xl"} mb={"lg"}>
        <SimpleGrid cols={2}>
          <Card shadow="md" radius="lg" withBorder style={{ marginLeft: 20 }}>
            <MultiSelect
              checkIconPosition="left"
              multiple
              placeholder="Seleziona pokemon da aggiungere alla lista"
              data={options}
              searchable
              nothingFoundMessage="Nessun pokemon trovato..."
              value={selectedPokemonList}
              onChange={setSelectedPokemonList}
            />

            <Card withBorder>
              <Text>{`Pokemon preferiti: ${selectedPokemonList}   `}</Text>
            </Card>
          </Card>

          <Card shadow="md" radius="lg" withBorder style={{ marginRight: 20 }}>
            <MultiSelect
              placeholder="Seleziona pokemon da rimuovere alla lista"
              data={pokemonModel.selectedList}
              searchable
              nothingFoundMessage="Nessun pokemon trovato..."
              value={currentSelected}
              onChange={(value) => setCurrentSelected(value)}
            />

            <Card withBorder>
              <Text>{`Pokemon da rimuovere: ${currentSelected}   `}</Text>
            </Card>
          </Card>
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
};
