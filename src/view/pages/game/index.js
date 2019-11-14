import React, {Component} from "react";
import Player from "../../../model/players"
import ConfrontIcon from "./pngtree-creative-vs-metal-light-effect-font-png-image_1693090.jpg";

function Exibir (){
    return (
        <p>Olá {localStorage.getItem("objnome")}, escolha:</p>
    );
}

class App extends Component {

    render(){
        return (
            <div className="corpo">
                <div>
                    <Player/>
                </div>
                <div>
                    <img src={ConfrontIcon} />
                </div>
                <div>
                    <Player/>
                </div>
            </div>
        );    
   }
}   
export default App;