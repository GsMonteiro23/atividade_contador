import { useState } from "react";
import './estilo.css';

export default function Contador() {
    const [Contador, setContador] = useState(0);
    const [passo, setPasso] = useState(1);

    function incrementar(){
        setContador(valorAnterior => valorAnterior + passo);
    }

    function decrementar(){
        setContador(valorAnterior => valorAnterior - passo);

    }

    function resetar(){

        setContador(0);
    }

    return(
        <div className="card-exemplo">
        <div className="card-heard">
            <span className="badge">1. Estado Numerico</span>
            <h3>Contador com passo customizado</h3>
            </div>   

            <div className="contador-display">
                <span className="numero-contador">{Contador}</span>

            </div>

           <div className='passo-container'>
            <label htmlFor="passo">
                Passo do incremento: 
                </label>

            <input type='number' min='1' max='10' value={passo} onChange={(e) => setPasso(Number(e.target.value))} />

        </div>

        <div className='botoes-container'>
            <button className='decrementar' onClick={decrementar}>Decrementar</button>
            <button className='incrementar' onClick={incrementar}>Incrementar</button>
            <button className='resetar' onClick={resetar}>Resetar</button>
            </div>
        </div> 

    );
}


