import React from "react";
import AstroContainer from './components/Astronomy/AstroContainer';
import AsteroidContainer from './components/Asteroids/AsteroidContainer';
import styled from 'styled-components';
import "./App.css";

const DivContainer = styled.div`
  text-align: center; 
`;

function App() {

  return (
    <DivContainer className="App">
      <AstroContainer />
      <AsteroidContainer />
    </DivContainer>
  );
}

export default App;
