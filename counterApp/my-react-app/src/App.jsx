import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/count/countSlice.js';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h1>Counter App</h1>

        {/* Counter Display */}
        <h2>Current Count: {count}</h2>

        {/* Counter Controls */}
        <div>
          <button onClick={() => dispatch(increment())} style={{ margin: '5px' }}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} style={{ margin: '5px' }}>
            Decrement
          </button>
          <button onClick={() => dispatch(reset())} style={{ margin: '5px' }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
