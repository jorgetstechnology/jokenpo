import React, {Component} from "react";
import Player from "../../../model/players"
import ConfrontIcon from "./pngtree-creative-vs-metal-light-effect-font-png-image_1693090.jpg";
import "./index.css";



class App extends Component {

    constructor(){
        super();
        this.state = {
            nomePlayer: localStorage.getItem("objnome"),
            escolhaPlayer : 0,
            placarPlayer : 0,
            nomeComputer : "Computer",
            placarComputer : 0,
            escolhaComputador : 0,
            ganhador : null,
        }
    }
    
    player(){
        return (
            <div className="corpo">
                <p>Jogador: {this.state.nomePlayer} </p>
                <div className="imagenss">
                <p>Escolha: </p>    
                    <button> Pedra </button>
                    <button> Papel </button> 
                    <button> Tesoura </button>              
                </div>
            </div>
        ); 
    }
    
    getGanhador(){
        return this.ganhador;
    }

    mecanics(){
        switch(this.escolhaPlayer) {
            case 1:
                if(this.escolhaPlayer === 1 & this.escolhaComputador === 2){
                    this.ganhador = this.nomeComputer;
                    return console.log("Ganhador foi " + this.nomeComputer);
                } else if(this.escolhaPlayer === 1 & this.escolhaComputador === 3){
                    this.ganhador = this.nomePlayer;
                    return console.log("Ganhador foi " + this.nomePlayer);
                } else if(this.escolhaPlayer === 1 & this.escolhaComputador === 1){
                    this.ganhador = "Empate";
                    return console.log("Empate");
                }
                break;
            case 2:
                if(this.escolhaPlayer === 2 & this.escolhaComputador === 1){
                    this.ganhador = this.nomePlayer;
                    return console.log("Ganhador foi " + this.nomePlayer);
                } else if(this.escolhaPlayer === 2 & this.escolhaComputador === 3){
                    this.ganhador = this.nomeComputer;
                    return console.log("Ganhador foi " + this.nomeComputer);
                } else if(this.escolhaPlayer === 2 & this.escolhaComputador === 2){
                    this.ganhador = "Empate";
                    return console.log("Empate");
                }
                break;
            case 3:
                if(this.escolhaPlayer === 3 & this.escolhaComputador === 1){
                    this.ganhador = this.nomeComputer;
                    return console.log("Ganhador foi " + this.nomeComputer);
                } else if(this.escolhaPlayer === 3 & this.escolhaComputador === 2){
                    this.ganhador = this.nomePlayer;
                    return console.log("Ganhador foi " + this.nomePlayer);
                } else if(this.escolhaPlayer === 3 & this.escolhaComputador === 3){
                    this.ganhador = "Empate";
                    return console.log("Empate");
                }
                break;
            default:
                console.log("Sem Escolhas.");
        }
    }
    render(){
        return (
            <div className="corpo">
                <div className="um1" >
                    {this.player()}
                </div>
                <div className="um2">
                    <img src={ConfrontIcon} alt="Img"/>
                </div>
                <div className="um3">
                    <Player />
                </div>
            </div>
        );    
   }
}   
export default App;