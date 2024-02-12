interface CardProps {
  title?: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const Card: React.FC<CardProps> = ({ title, count, setCount }) => {
  // const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count => count + 1);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={incrementCounter}>count is {count}</button>
    </div>
  );
};

export default Card;

