import './App.css'
import { ContadorReducer } from './hooks-examples/ContadorReducer';

function App(){
  return(
    <div>
      <h1>Exemplo com useReducer</h1>
      <ContadorReducer/>
    </div>
  );
}

export default App;