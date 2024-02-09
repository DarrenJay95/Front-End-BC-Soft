import { Button } from '@mantine/core';

const Pokemon = () => {
    // const PokemonPage: React.FC = () => <Pokemon />
    // const [currentComponent, setCurrentComponent] = React.useState<string>('pokemonlist');
    return (
        <div className="App">
            <Button>Pokemon</Button>
            {/* {currentComponent === 'pokemonlist' && <PokemonPage />} */}
            {/* <Button onClick={() => setCurrentComponent('pokemonlist')} style={{ margin: '50px' }} size="sm" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Pokemon</Button> */}
        </div>
    )
}

export default Pokemon;