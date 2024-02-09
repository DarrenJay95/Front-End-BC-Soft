import { useDisclosure } from "@mantine/hooks";
import { AppShell, Flex, Burger, Button, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";
// import { ExternalLink } from "../../AtomicDesign/Atom";
// import reactLogo from "../../assets/react.svg"

const Header = () => {
    const [opened, { toggle }] = useDisclosure();
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    const toggleColorScheme = () => {
        setColorScheme((computedColorScheme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <AppShell.Header >
            <Flex justify='space-between' align='center' style={{ padding: '10px 20px' }}>
                <Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
                <Button size="sm" variant='light' style={{ marginTop: '5px' }} onClick={toggleColorScheme}>
                    {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
                </Button>
            </Flex>
        </AppShell.Header >
    )
}

export default Header;