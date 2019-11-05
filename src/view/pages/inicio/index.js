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
        <button>
           <Link to="../home/index.js">App.User</Link>     
        </button>
         
        
        </div>
    </nav>
  );
}



export default App;
