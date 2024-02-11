import { Box, Button, Title } from "@mantine/core";

interface colorProps {
  className: string;
  style?: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;

}
export const ColorChanger: React.FC<colorProps> = ({ className, setColor, color }) => {

  const changeColor = () => {
    // Cambia il colore in base al colore corrente
    setColor(color === '#67AADF' ? '#FFD129' : '#67AADF'); // istruzione condizionale ternario
  };

  return (
    <Box className={className}>
      <Title order={1} style={{ color: color, marginBottom: 50 }}>React + Vite + Mantine</Title>
      <Button onClick={changeColor} variant="light">Cambia colore</Button>
    </Box>
  );
}