import React from "react";
import "./index.css";
import Logo from "./images.png";
import {Link} from "react-router-dom";

 

function App() {
  
  return (
    <nav>
        <div className="imagem">
            <img src={Logo} alt="Imagen inicial" className="imagemInicial"/>
        </div>
        <div className="button">
        <button onClick={localStorage.clear()}>
           <Link to="../home/index.js" >Iniciar Jogo</Link>     
        </button>
         
        
        </div>
    </nav>
  );
}
export default App;