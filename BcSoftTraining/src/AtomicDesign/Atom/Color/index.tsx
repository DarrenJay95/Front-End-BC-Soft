import { Button } from "@mantine/core";

interface colorProps {
  className: string;
  style?: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;

}
export const ColorChanger: React.FC<colorProps> = ({ className, setColor, color }) => {

  const changeColor = () => {
    // Cambia il colore in base al colore corrente
    setColor(color === '#05C1E3' ? '#FFD129' : '#05C1E3'); // istruzione condizionale ternario
  };

  return (
    <div className={className}>
      <h1 style={{ color: color }}>React + Vite + Mantine</h1>
      <Button onClick={changeColor} variant="light">Cambia colore</Button>
    </div>
  );
}