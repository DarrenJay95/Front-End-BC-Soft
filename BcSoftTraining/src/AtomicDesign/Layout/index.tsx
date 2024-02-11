import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./index.scss";
import { Header, Navbar } from "../Molecule";
import { Outlet } from "react-router-dom";

function Layout() {
  const [opened] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Header />
      <Navbar />
      <AppShell.Main><Outlet /></AppShell.Main>
    </AppShell>
  );
}

export default Layout;
