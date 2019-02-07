import React, { useState } from 'react';
import './App.css';

export default () => {

  const [name, setName] = useState('keyboardbreaker');
  const [age, setAge] = useState(11);
  return (
      <div className="App">
        <header className="App-header">
            <p>Name: <input type="text" value={name} onChange={e => setName(e.target.value)}></input></p>
            <p>Age: {age}</p>
            <button onClick={() => {setAge(age + 1)}}>+ 1</button>
            <button onClick={() => {setAge(age - 1)}}>- 1</button>
            <h1>Preview:</h1>
            <p>{name}, {age}</p>
        </header>
      </div>
  );
}

