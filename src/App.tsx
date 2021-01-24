import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  return <Greetings name="React" optional="fun!!" onClick={onClick} />;
}

export default App;
