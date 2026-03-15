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

# API com Fecth

<img src="assets\react_API_Fecth.png" widht="150">

App.jsx:

 ``` 
import './App.css'
import { FetchExemplo } from './hooks-examples/FetchExemplo';

function App(){
  return(
    <div>
      <h1>Exemplo de API com fetch</h1>
      <FetchExemplo/>
    </div>
  );
}

export default App;
```

# API com Axios


App.jsx:

 ``` 
import './App.css'
import { AxiosExemplo } from './hooks-examples/AxiosExemplo';

function App(){
  return(
    <div>
      <h1>Exemplo de API com Axios</h1>
      <AxiosExemplo/>
    </div>
  );
}

export default App;
```


# Feedback de API

App.jsx:

 ``` 
import './App.css'
import { EstadoComFeedback } from './hooks-examples/EstadoComFeedback';

function App(){
  return(
    <div>
      <h1>Exemplo com estados de carregamento e erro</h1>
      <EstadoComFeedback/>
    </div>
  );
}

export default App;
```

# API de IA

<img src="assets\react_AI_API.png" widht="150">

App.jsx:

 ``` 
import './App.css'
import { GeradorRespostaIA } from './hooks-examples/GeradorRespostaIA';

function App(){
  return(
    <div>
      <h1>Teste com API da IA</h1>
      <GeradorRespostaIA/>
    </div>
  );
}

export default App;
```


# Painel com Autenticação de Usuário

<img src="assets\react_AI_API.png" widht="150">

App.jsx:

 ``` 
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import { PainelLogin } from './hooks-examples/PainelLogin';
import { AreaRestrita } from './hooks-examples/AreaRestrita';



function App(){
  return(
    <AuthProvider>
      <h1>Sistema com Login Simulado</h1>
      <PainelLogin/>
      <hr/>
      <AreaRestrita/>
    </AuthProvider>
  );
}

export default App;
```