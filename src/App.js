import logo from './logo.svg';
import './App.css';
import Obra from './obra.json'
import Linia from './components/linia'

  function App() {

    const linias = Obra.map( (e) => <Linia value={e} key={e.id}/>);
  
    return (
      <div className="App">
  
        {linias}
        
      </div>
    );
  }
  
  export default App;
