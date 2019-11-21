import React, {Component} from "react";
//import Player from "../../../model/players"
import ConfrontIcon from "./imagesvs.jfif";
import Papel from "./papel.png";
import Tesoura from "./tesoura.png";
import Pedra from "./pedra.png";
import "./index.css";



class App extends Component {

    constructor(){
        super();
        this.state = {
            nomePlayer: localStorage.getItem("objnome"),
            escolhaPlayer : 1,
            placarPlayer : 0,
            nomeComputer : "Computer",
            placarComputer : 0,
            escolhaComputador : 0,
            ganhador : null,
        }
    }

    computer(){
        return (
            <div className="corpo">
                <p>Jogador: {this.state.nomeComputer} </p>
                <div className="imagenss">
                <p>Escolha: </p>    
                     <img src={Pedra} alt="pedra"/> 
                     <img src={Papel} alt="papel"/> 
                     <img src={Tesoura} alt="tesoura"/>                 
                </div>
            </div>
        ); 
    };

    player(){
        return (
            <div className="corpo">
                <p>Jogador: {this.state.nomePlayer} </p>
                <div className="imagenss">
                    <p>Escolha: </p>    
                    <button onClick={this.escolhaPedra}> <img src={Pedra} alt="pedra"/> </button>
                    <button onClick={this.escolhaPapel}> <img src={Papel} alt="papel"/> </button> 
                    <button onClick={this.escolhaTesoura}> <img src={Tesoura} alt="tesoura"/> </button> 
                </div>
            </div>
        ); 
    }
   

    getGanhador(){
        return this.state.ganhador;
    }
    
    
    escolhaPedra = () => {

        this.setState({ escolhaPlayer : 1,  escolhaComputador : Math.floor(Math.random() *  3) +1});

        if(this.state.escolhaPlayer === 1 & this.state.escolhaComputador === 2){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomeComputer);
            
        } else if(this.state.escolhaPlayer === 1 & this.state.escolhaComputador === 3){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomePlayer);
           
        } else if(this.state.escolhaPlayer === 1 & this.state.escolhaComputador === 1){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Empate");
            
             
        }
    }
    escolhaPapel = () =>{

        this.setState({ escolhaPlayer : 2,  escolhaComputador : Math.floor(Math.random() *  3) +1});

        if(this.state.escolhaPlayer === 2 & this.state.escolhaComputador === 1){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomePlayer);
        } else if(this.state.escolhaPlayer === 2 & this.state.escolhaComputador === 3){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomeComputer);
        } else if(this.state.escolhaPlayer === 2 & this.state.escolhaComputador === 2){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +" ||  Escolha Computer: "+this.state.escolhaComputador);
            return  alert( "Empate");
        }
    }

    escolhaTesoura = () =>{ 
        
        this.setState({ escolhaPlayer : 3,  escolhaComputador : Math.floor(Math.random() *  3) +1});
        
        if(this.state.escolhaPlayer === 3 & this.state.escolhaComputador === 1){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +"||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomeComputer);
        } else if(this.state.escolhaPlayer === 3 & this.state.escolhaComputador === 2){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +"||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Ganhador foi "+this.state.nomePlayer);
        } else if(this.state.escolhaPlayer === 3 & this.state.escolhaComputador === 3){
            console.log("Escolha Player: "+ this.state.escolhaPlayer +"||  Escolha Computer: "+this.state.escolhaComputador);
            return alert( "Empate");
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
                   {this.computer()}
                </div>
            </div>
        );    
   }
}   
export default App;