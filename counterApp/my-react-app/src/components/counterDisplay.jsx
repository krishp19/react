import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
