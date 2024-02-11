import reactLogo from "../.././assets/react.svg";
import viteLogo from "../../../public/vite.svg"
import { ColorChanger, ExternalLink } from "../../AtomicDesign/Atom";
import { useState } from "react";
import { Box, Text } from "@mantine/core";

const Home = () => {
    const [color, setColor] = useState('lightblue');
    // const [count, setCount] = useState(0);

    return (
        <>
            <Box>
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
                <ColorChanger className={'card'} setColor={setColor} color={color} />
                <Text c={"dimmed"}>
                    Clicca sui logi di Vite e React per apprendere più cose
                </Text>
                {/* <Card title={"Incrementami"} setCounter={setCount} count={count} /> */}
            </Box>
        </>
    )
}

export default Home