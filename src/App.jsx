import React, { useState } from "react";
import './App.css';

const App = () => {
  const [color, setColor] = useState("#FFFFFF");

  const changeBackground = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1 style={{color:'gray'}}>Transform your screen : <span style={{color:'black'}}> Discover the Perfect One!!!</span></h1>
      <button onClick={changeBackground}>Click Me</button>
    </div>
  );
};

export default App;
