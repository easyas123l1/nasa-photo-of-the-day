import React, {useState, useEffect} from "react";
import AstroContainer from './components/Astronomy/AstroContainer';
import axios from 'axios';
import "./App.css";

function App() {

  return (
    <div className="App">
      <AstroContainer />
    </div>
  );
}

export default App;
