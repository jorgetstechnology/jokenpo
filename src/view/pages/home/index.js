import React, {Component} from "react";
import {Link} from "react-router-dom";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      nomeUser: localStorage.getItem("objnome")
    }
  }
 
  armazenar = () =>{
    //let nome = document.querySelector(".nome").value;
    const obj = document.querySelector(".nome").value;
    localStorage.setItem('objnome', obj);
  }
  
  render(){
      return (
        <div className="pagina">
          <div className="painel">
            <p> Digite seu nick</p>
            <input className={"nome"}/>
            <button onClick={this.armazenar}>
              <Link to="../game/index.js" >
                Começa
              </Link>
            </button>
          </div>
        </div>
      );
  } 
}
export default App;