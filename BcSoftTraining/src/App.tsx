import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Box, Text } from "@mantine/core";
import Header from './Components/Header/header'
import Navbar from './Components/Navbar/navbar'
import RouteSwitcher from "./Components/RouteSwitcher/routeswitcher";

function App() {
  const [opened] = useDisclosure();

  return (
    <>
      <Box className="App" style={{ marginTop: '20px' }}>
        <AppShell
          header={{ height: 70 }}
          navbar={{ width: 170, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding='sm'>

          <Header />
          <Navbar />

          <AppShell.Main>
            <RouteSwitcher />
          </AppShell.Main>

          <AppShell.Footer
            style={{ height: 50, padding: 15 }}
            zIndex={opened ? 'auto' : 201}>
            <Text
              variant="gradient"
              gradient={{ from: '#05C1E3', to: '#FFD129', deg: 90 }}>
              Qual è il supereroe preferito del frontend developer? Captain HTML! ⚡
            </Text>
          </AppShell.Footer>
        </AppShell>
      </Box>
    </>
  );
}

export default App;