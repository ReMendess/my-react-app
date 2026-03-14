# React + Vite

## Como rodar

No terminal
``` 
npm run dev
``` 

Ctrl C -> Parar de rodar


# useState

<img src="assets\react_useState.png" widht="150">

App.jsx:

 ``` import './App.css'
  import { ContadorBasico } from './hooks-examples/ContadorBasico';
  
  function App(){
    return(
      <div>
        <h1>Exemplo com useState</h1>
        <ContadorBasico/>
      </div>
    );
  }
  
  export default App;
```

# useEffect

<img src="assets\react_useEffect.png" widht="150">

App.jsx:

 ``` 
 import './App.css'
import { Relogio } from './hooks-examples/Relogio'

function App(){
  return(
    <div>
      <h1>Exemplo com useEffect</h1>
      <Relogio/>
    </div>
  );
}

export default App;
```


# useContext


App.jsx:

 ``` 
import './App.css'
import { TemaContexto } from './contexts/TemaContexto';
import { ComponenteComTema } from './hooks-examples/ComponenteComTema';

function App(){
const tema = "dark"; // Altere aqui o tema

  return(
    <TemaContexto.Provider value = {"tema"}>
      <div className={tema === "dark" ? "tema-escuro": "tema-claro"}>
        <h1>Exemplo com useContext</h1>
      <ComponenteComTema/>
      </div>
    </TemaContexto.Provider>
  );
}

export default App;
```


# useReduce

<img src="assets\react_useReducer.png" widht="150">

App.jsx:

 ``` 
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
```