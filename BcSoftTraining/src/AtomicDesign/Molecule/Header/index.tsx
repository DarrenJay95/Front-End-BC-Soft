import { AppShell, Flex, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Header() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell.Header>
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={"row"}
        style={{ height: "100%" }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
        <Flex justify={"center"} align={"center"} style={{ width: "100%" }}>
          <div>Logo</div>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}

export default Header;
