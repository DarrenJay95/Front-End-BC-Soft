import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExternalLink } from "./AtomicDesign/Atom";
import Card from "./AtomicDesign/Atom/Card"; // Assicurati che il percorso sia corretto in base alla struttura del tuo progetto
import ColorChanger from "./AtomicDesign/Atom/Color";
import Login from "./AtomicDesign/Atom/LoginForm";
import axios from 'axios';

const apiKey = 'https://pokeapi.co/api/v2/';
const inputName = 'ditto';
interface Pokemon {
  weight: number;
  name: string;
  // Altre proprietà se presenti
}
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  const [data, setData] = useState<Pokemon[]>([]);

  function getPokemon() {
    axios.get(apiKey + 'pokemon/' + inputName)
    .then(response => {
      setData(response.data.name);
    })
    .catch(error => {
      console.log(error);
    })
    getPokemon()
  }
  useEffect(() => {
    getPokemon();
  });
  
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
      <Login/>
      <Card title={"Ciao"} setCounter={setCount} count={count} />
      <ColorChanger className={'card'} style={color?'red':'black'} setColor={setColor} color={color}/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <div className="pokemon">
        <ul>
        {Array.isArray(data) && data.map(item => (
          <li key={item.weight}>{item.name}</li>
        ))}
        </ul>
    </div>

      
    </>
  );
  
  
  
}

    

export default App;
