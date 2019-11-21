
class Jogo{
    constructor(nomePlayer){
        
        this.nomePlayer = nomePlayer;
        this.escolhaPlayer = 0;
        this.placarPlayer = 0;
        this.nomeComputer = "Computer";
        this.placarComputer = 0;
        this.escolhaComputador = 0;
        this.ganhador = null;
    }
    
    getNomePlayer(){
        return this.nomePlayer;
    }

    setNomePlayer(nomePlayer){
        this.nomePlayer = nomePlayer;
    }

    getEscolhaPlayer(){
         return this.escolhaPlayer;
    }

    setEscolhaPlayer(escolhaPlayer){
        this.escolhaPlayer = escolhaPlayer;
    }

    getPlacarPlayer(){
         return this.placarPlayer;
    }

    setPlacarPlayer(placarPlayer){
        this.placarPlayer = placarPlayer;
    }

    getNomeComputer(){
        return this.nomeComputer;
    }
    
    getEscolhaComputador(){
        return this.escolhaComputador;
    }

    setEscolhaComputador(escolhaComputador){
        this.escolhaComputador = escolhaComputador;
    }

    getPlacarComputer(){
        return this.placarComputer;
    }

    setPlacarComputer(placarComputer){
        this.placarComputer = placarComputer;
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
}

function computadorJogando() {
        return Math.floor(Math.random() *  3) +1;
}

var game = new Jogo("Hyago");
game.setEscolhaPlayer(3);
game.setEscolhaComputador(computadorJogando());
console.log("Computador escolheu "+game.getEscolhaComputador());
console.log(game.mecanics());

var partida = [game.getGanhador()]

console.log(partida[0]);
