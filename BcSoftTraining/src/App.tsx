import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Header from './Components/Header/header'
import Navbar from './Components/Navbar/navbar'
import RouteSwitcher from "./Components/RouteSwitcher/routeswitcher";

function App() {
  const [opened] = useDisclosure();

  return (
    <>
      <div className="App" style={{ marginTop: '20px' }}>
        <AppShell
          header={{ height: 70 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding='sm'>

          <Header />
          <Navbar />

          <AppShell.Main>
            <RouteSwitcher />
          </AppShell.Main>

          <AppShell.Footer
            style={{ height: 70, padding: 15 }}
            zIndex={opened ? 'auto' : 201}>
            Qual è il supereroe preferito del frontend developer? Captain HTML! ⚡
          </AppShell.Footer>
        </AppShell>
      </div>
    </>
  );
}

export default App;