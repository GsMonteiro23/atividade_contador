import Contador from "./componentes/contador";

import './App.css';

export default function App(){

  return(
    <div className="app-container">

      <header className="app-header">
        <h1>Explorador de Estados do React</h1>

        <P>
          Aprenda na pratica os 4 princinpais padroes de uso hook
          <span>useState</span>
        </P>

      </header>

      <main className="gird-exemplos">

        <Contador/>

      </main>

      <footer className="app-footer">

        <p>
          Demonstrando o uso do React Hook useState
        </p>

      </footer>

    </div>
  )
}