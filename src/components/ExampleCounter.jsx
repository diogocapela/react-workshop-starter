import React, { useState } from 'react';

// Components
import Button from './Button';

function ExampleCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div style={{ background: 'darkgrey', padding: '15px' }}>
      <p>Example Counter: {counter}</p>

      <div>
        <Button color="blue" onClick={handleIncrement}>
          Increment
        </Button>

        <Button color="red" onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default ExampleCounter;
