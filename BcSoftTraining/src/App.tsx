import { useState, useEffect, useCallback, Children } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExternalLink } from "./AtomicDesign/Atom";
import Card from "./AtomicDesign/Atom/Card"; // Assicurati che il percorso sia corretto in base alla struttura del tuo progetto
import ColorChanger from "./AtomicDesign/Atom/Color";
import Login from "./AtomicDesign/Atom/LoginForm";
import axios from "axios";

const apiKey = "https://pokeapi.co/api/v2/";
const inputName = "ditto";
interface Pokemon {
  weight: number;
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  // Altre proprietà se presenti
}
function App() {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ App ~ count:", count);
  const [color, setColor] = useState("black");
  const [data, setData] = useState<Pokemon>();

  const getPokemon = useCallback(async () => {
    try {
      const result = await axios.get(apiKey + "pokemon/" + inputName);
      console.log("🚀 ~ getPokemon ~ result:", result);
      const { data } = result;
      setData(data);
      return data;
    } catch (error) {
      console.log("🚀 ~ getPokemon ~ error:", error);
    }
  }, []);
  
  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

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
      </div>
      <h1>Vite + React</h1>
      <Login />
      <Card title={"Ciao"} setCount={setCount} count={count} />
      <ColorChanger
        className={"card"}
        style={color ? "red" : "black"}
        setColor={setColor}
        color={color}
      />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="pokemon">
        <span>Pokemon: </span>
        <ul>
          <li>
            name: {data?.name} - weight: {data?.weight}
          </li>
        </ul>
        <span>Abilities: </span>
        <ul>
          {
            Children.toArray(
              data?.abilities.map((ability) => (
                <li>
                  name: {ability?.ability.name} - url: {ability.ability?.url}
                </li>
              ))
            )
          }
        </ul>
      </div>
    </>
  );
}

export default App;
