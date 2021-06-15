import logo from './logo.svg';
import './App.css';
import Obra from './obra.json'
import Linia from './components/linia'
import styled from 'styled-components'
import {Container} from './styles/styled'

  function App() {

    const linias = Obra.map( (e) => <Linia value={e} key={e.id}/>);
  
    return (
      <div>
        <Container>
        {linias}
        </Container>
        
      </div>
    );
  }
  
  export default App;
