import React, {Component} from "react";
import "./players.css";
import Papel from "./papel.png";
import Tesoura from "./tesoura.png";
import Pedra from "./pedra.png";

//var partida = this.props.dados.partida.jogador;
class App extends Component {

  
    render(){
        return (
            <div className="corpo">
                <p>Jogador: {} </p>
                <div className="imagenss">
                <p>Escolha: </p>    
                    <button> <img src={Pedra} alt="pedra"/> </button>
                    <button> <img src={Papel} alt="papel"/> </button> 
                    <button> <img src={Tesoura} alt="tesoura"/> </button>
                    <button> teste</button>
                </div>
            </div>
        );    
   }
}   
export default App;