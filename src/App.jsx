import React, { useState } from 'react'
import './App.css';
import BigDisplay from './components/big-display/BigDisplay';
import Buttons from './components/buttons/Buttons';

function App() {

  const [data, setData] = useState('0');
  const [result, setResult] = useState('0');

  return (
    <div id="calculator">
      <BigDisplay
        data={data}
        result={result}
        setData={setData}
        setResult={setResult}
      />
      <Buttons
        data={data}
        result={result}
        setData={setData}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
