import { useEffect, useMemo, useReducer, useState } from 'react';
import { Card, Text, Button, Group, SimpleGrid, MultiSelect } from '@mantine/core';
import { POKEMON_ACTION, pokemonListDefaultState, pokemonReducer } from './pokemon.reducer';
import { getPokemon } from '../../../Services/Pokemon';

export const Pokemon = () => {

    const [pokemonModel, dispatch] = useReducer(pokemonReducer, pokemonListDefaultState);
    const [selectedPokemonList, setPokemon] = useState<string[]>([])
    const [removePokemon, setRemovePokemon] = useState<string[]>([])

    const handleAddPokemon = () => {
        dispatch({type: 'add', payload: selectedPokemonList })
    }
    const handleRemovePokemon = () => {
        console.log("Pokemon rimosso:", removePokemon);
    }

    useEffect(()=>{
        getPokemon().then( res => dispatch({ type: POKEMON_ACTION.save, payload: res}))
    }, [])
    // const PokemonList = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'];

    const options = useMemo(()=> {
        return pokemonModel.list?.map(el => ({
            label: el.name,
            value: el.name
        }))
    }, [pokemonModel.list]);
    return (
        <Card shadow="md" padding="lg" radius="lg" withBorder w={900}>
            <Text fw={500} ta={'center'} size='xl' mt={'xs'} mb={'md'}>Lista Pokemon</Text>

            <Group justify='space-evenly'>
                <Button variant='light' radius="md" onClick={handleAddPokemon}>
                    Aggiungi
                </Button>
                <Button color='red' variant='light' radius="md" onClick={handleRemovePokemon}>
                    Rimuovi
                </Button>
            </Group>

            <Card.Section mt={'xl'} mb={'lg'} >
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
                            onChange={setPokemon}
                        />

                        <Card withBorder>
                            <Text>
                                {`Pokemon preferiti: ${selectedPokemonList}   `}
                            </Text>
                        </Card>

                    </Card>

                    <Card shadow="md" radius="lg" withBorder style={{ marginRight: 20 }}>
                        <MultiSelect
                            placeholder="Seleziona pokemon da rimuovere alla lista"
                            data={pokemonModel.selectedList}
                            searchable
                            nothingFoundMessage="Nessun pokemon trovato..."
                            value={removePokemon}
                            onChange={(value) => setRemovePokemon(value)}
                        />

                        <Card withBorder>
                            <Text>
                                {`Pokemon da rimuovere: ${removePokemon}   `}
                            </Text>
                        </Card>

                    </Card>
                </SimpleGrid>

            </Card.Section>

        </Card>
    );
}
