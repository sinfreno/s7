import React, { useState } from 'react';
import './App.css';
import Obra from './obra.json'
import Linia from './components/linia'
import {Container, Btn} from './styles/styled'

  function App() {

    const [count, setCount] = useState(0);
    const size = Obra.length;

    if (count < 0){
      setCount(size - 1);
    }
    else if(count === size){
      setCount(0);
    }
  
    return (
      <div>
        <Container>
        <Btn onClick={() => setCount(count - 1)}>Anterior</Btn>
        <Btn onClick={() => setCount(count + 1)}>Siguiente</Btn>
        <p>{Obra[count]}</p>
        </Container>
      </div>
    );
  }
  
export default App;