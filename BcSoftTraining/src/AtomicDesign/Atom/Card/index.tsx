import React, { useState } from 'react';

interface CardProps {
  title?: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

export const Card: React.FC<CardProps> = ({ title }) => {
  const [count, setCount] = useState(0);

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