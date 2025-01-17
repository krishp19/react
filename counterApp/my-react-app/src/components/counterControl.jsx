import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterControls;
