import React, {useState} from 'react';

interface colorProps {
className: string;
style?: string;
setColor: React.Dispatch<React.SetStateAction<string>>;
color: string;

}
const ColorChanger: React.FC<colorProps> = ({className}) => { 
   
    const [color, setColor] = useState('black');
  
    const changeColor = () => {
      // Cambia il colore in base al colore corrente
      setColor(color === 'black' ? 'red' : 'black'); // istruzione condizionale ternario
    };
  
    return (
      <div className={className}>
        <h1 style={{ color: color }}>Testo con colore dinamico</h1>
        <button onClick={changeColor}>Cambia colore</button>
      </div>
    );
  }

  
  export default ColorChanger;

