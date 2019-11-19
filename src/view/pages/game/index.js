import React, {Component} from "react";
import Player from "../../../model/players"
import ConfrontIcon from "./pngtree-creative-vs-metal-light-effect-font-png-image_1693090.jpg";
import "./index.css";

function Exibir (){
    return (
        <p></p>
    );
}

var dados = {
        partida:{
            jogador: "hyago",
            computador: "Computador"
        },
        jogadorPonto: 0,
        computadorPonto: 0,
        
        
};

class App extends Component {

    render(){
        return (
            <div className="corpo">
                <div className="um1" >
                    <Player partida={dados.partida.jogador} />
                </div>
                <div className="um2">
                    <Exibir/>
                    <img src={ConfrontIcon} alt="Img"/>
                </div>
                <div className="um3">
                    <Player partida={dados.partida.computador} />
                </div>
            </div>
        );    
   }
}   
export default App;