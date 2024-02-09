import reactLogo from "../.././assets/react.svg";
import viteLogo from "../../../public/vite.svg"
import { ColorChanger, ExternalLink } from "../../AtomicDesign/Atom";
import { useState } from "react";

const Home = () => {
    const [color, setColor] = useState('lightblue');
    // const [count, setCount] = useState(0);

    return (
        <>
            <div>
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
                <p className="read-the-docs">
                    Clicca sui logi di Vite e React per apprendere di più
                </p>
                {/* <Card title={"Incrementami"} setCounter={setCount} count={count} /> */}
            </div>
        </>
    )
}

export default Home