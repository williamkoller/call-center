import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState(999999);
  const [status, setstatus] = useState('waiting_call');
  return (
    <div>
      <h2> { code } </h2>
      <h2> { status } </h2>
    </div>
     
  );
}

export default App;
