import {
  Card,
  Text,
  Button,
  Group,
  SimpleGrid,
  MultiSelect,
} from "@mantine/core";
import { usePokemonList } from "./pokemon.hook";

export const Pokemon = () => {
  const {
    handleAddPokemon,
    handleRemovePokemon,
    options,
    selectedPokemonList,
    setSelectedPokemonList,
    pokemonModel,
    currentSelected,
    setCurrentSelected
  } = usePokemonList();
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
              onChange={setCurrentSelected}
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
