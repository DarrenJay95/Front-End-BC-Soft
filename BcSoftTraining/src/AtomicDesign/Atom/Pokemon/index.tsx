import { useState } from 'react';
import { Card, Text, Button, Group, SimpleGrid, MultiSelect } from '@mantine/core';

export const Pokemon = () => {
    const [addPokemon, setAddPokemon] = useState<string[]>([])
    const [removePokemon, setRemovePokemon] = useState<string[]>([])

    const handleAddPokemon = () => {
        console.log("Pokemon aggiunto:", addPokemon);
    }
    const handleRemovePokemon = () => {
        console.log("Pokemon rimosso:", removePokemon);
    }

    // const PokemonList = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'];

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
                            placeholder="Seleziona pokemon da aggiungere alla lista"
                            data={[]}
                            searchable
                            nothingFoundMessage="Nessun pokemon trovato..."
                            value={addPokemon}
                            onChange={setAddPokemon}
                        />

                        <Card withBorder>
                            <Text>
                                {`Pokemon preferiti: ${addPokemon}   `}
                            </Text>
                        </Card>

                    </Card>

                    <Card shadow="md" radius="lg" withBorder style={{ marginRight: 20 }}>
                        <MultiSelect
                            placeholder="Seleziona pokemon da rimuovere alla lista"
                            data={['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle']}
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
