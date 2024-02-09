import React from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useState } from "react";
// import { Card, ColorChanger, Login } from './AtomicDesign/Atom';
import "./App.css";

import Pokemon from "./AtomicDesign/Atom/Pokemon";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Flex, Burger, Button, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";

// import { useNavigate } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState('black');

  // const ExternalLink: React.FC = () => <ExternalLink />;
  const PokemonPage: React.FC = () => <Pokemon />

  const [opened, { toggle }] = useDisclosure();
  const [currentComponent, setCurrentComponent] = React.useState<string>('pokemonlist');

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme((computedColorScheme === 'dark' ? 'light' : 'dark'));
  }

  // const navigate = useNavigate();
  return (
    <>
      <div className="App" style={{ marginTop: '20px' }}>

        <AppShell
          header={{ height: 70 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding='sm'>
          <AppShell.Header>
            <Flex justify='space-between' align='center' style={{ padding: '10px 20px' }}>
              <Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
              <Button size="sm" variant='link' style={{ marginTop: '5px' }} onClick={toggleColorScheme}>
                {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
              </Button>
            </Flex>
          </AppShell.Header >

          <AppShell.Navbar p='md' style={{ gap: '10px' }}>
            <Button onClick={() => setCurrentComponent('pokemonlist')} style={{ margin: '50px' }} size="sm" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Pokemon</Button>
          </AppShell.Navbar>

          <AppShell.Main>
            {currentComponent === 'pokemonlist' && <PokemonPage />}
          </AppShell.Main>

          <AppShell.Footer
            style={{ height: 70, padding: 15 }}
            zIndex={opened ? 'auto' : 201}>
            Qual è il supereroe preferito del frontend developer? Captain HTML! ⚡
          </AppShell.Footer>
        </AppShell>

      </div>

      {/* <div>
        <ExternalLink
          href="https://vitejs.dev"
          src={viteLogo}
          className="logo"
          alt="Vite logo"
        />
        <ExternalLink
          href="https://react.dev"
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </div> */}

      {/* <Login />
      <Card title={"Ciao"} setCounter={setCount} count={count} />
      <ColorChanger className={'card'} style={color ? 'red' : 'black'} setColor={setColor} color={color} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    </>
  );
}

export default App;
