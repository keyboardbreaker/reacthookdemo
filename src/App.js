import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = url => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // similar to componentDidMount
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, [])
  return {data, loading};
}
export default () => {
  const [name, setName] = useState('keyboardbreaker');
  const [age, setAge] = useState(11);
  const {data, loading} = useFetch('https://api.randomuser.me/');

  let introText = ""; 
  let seperator = "";
  if(name !== ""){ 
    introText = "Hi, I am ";
    seperator = ",";
  }
  else {
    introText = "I am";
  }

  return (
      <div className="App">
        <h1>About Me Generator</h1>
        <div className="container">
            <div className="column">
              <h1 className="heading">Form</h1>
              <div className="form">
                <p>
                  <b>Name: </b> 
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}>
                  </input>
                </p>
                <p><b>Age:</b> {age} {' '}
                <button onClick={() => {setAge(age + 1)}}>+ 1</button>
                <button onClick={() => {setAge(age - 1)}}>- 1</button>
                </p>
              </div>
              
            </div>
            <div className="column">
              <h1 className="heading">Preview</h1>
              <p>{introText} {name}{seperator} {age} years old</p>
              {loading ? 
                <div>...loading</div> : 
                <img src={data.picture.medium} alt=""></img>
              }
            </div>
        </div>
      </div>
  );
}

