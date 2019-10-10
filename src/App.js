import React, {useState, useEffect} from "react";
import AstroContainer from './components/Astronomy/AstroContainer';
import AsteroidContainer from './components/Asteroids/AsteroidContainer';
import axios from 'axios';
import "./App.css";

function App() {

  return (
    <div className="App">
      <AstroContainer />
      <AsteroidContainer />
    </div>
  );
}

export default App;
