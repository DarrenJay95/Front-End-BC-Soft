import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExternalLink } from "./AtomicDesign/Atom";
import Card from "./AtomicDesign/Atom/Card"; // Assicurati che il percorso sia corretto in base alla struttura del tuo progetto

function App() {
  const [count, setCount] = useState(0);

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

      <Card title={"Ciao"} setCounter={setCount} count={count} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
