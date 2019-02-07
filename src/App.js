import React, { useState } from 'react';
import './App.css';

export default () => {

  const [name, setName] = useState('keyboardbreaker');
  const [age, setAge] = useState(11);
  return (
      <div className="App">
        <h1>About Me Paragraph Generator</h1>
        <div className="container">
            <div className="column">
              <h1 className="heading">Form:</h1>
              <p>Name: <input type="text" value={name} onChange={e => setName(e.target.value)}></input></p>
              <p>Age: {age}</p>
              <button onClick={() => {setAge(age + 1)}}>+ 1</button>
              <button onClick={() => {setAge(age - 1)}}>- 1</button>
            </div>
            <div className="column">
              <h1 className="heading">Preview:</h1>
              <p>{name}, {age}</p>
            </div>
        </div>
      </div>
  );
}

