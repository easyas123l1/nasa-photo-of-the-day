import React, {useState, useEffect} from "react";
import AstroContainer from './components/Astronomy/AstroContainer';
import axios from 'axios';
import "./App.css";

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀</span>!
      </p>
      <AstroContainer />
    </div>
  );
}

export default App;
