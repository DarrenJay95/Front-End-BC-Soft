import { Box, Space, Title } from '@mantine/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../AtomicDesign/Molecule/Pokemon';
import { Endpoints } from '../../Services/endpoints';

interface PokemonData {
    id: number;
    url: string;
    name: string;
}

const Pokedex: React.FC = () => {
    // const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
    const [, setPokemonData] = useState<PokemonData[]>([]);

    useEffect(() => {
        axios.get(Endpoints.pokemonList + "?limit=10").then((response) => {
            console.log(response.data)
            if (response.status >= 200 && response.status < 300) {
                const { results } = response.data;
                const newPokemonData: PokemonData[] = [];
                results.forEach((pokemon: { name: string }, index: number) => {
                    index++;
                    const pokemonObject: PokemonData = {
                        id: index,
                        url: 'IMAGE_API_URL' + index + ".png",
                        name: pokemon.name
                    };
                    newPokemonData.push(pokemonObject);
                });
                setPokemonData(newPokemonData);
            }
        });
    }, []);

    // axios.get(POKEMON_API_URL).then((response) => {
    //     setPokemonData(response.data.results.map(p => p.name))
    // })

    return (
        <Box className="App">
            <Title order={2} fw={700} c={'#67AADF'}>Pokedex</Title>
            <Space h={'xl'}></Space>
            <Pokemon />
        </Box>
    );
};

export default Pokedex;