
class Jogo{
    constructor(nomePlayer){
        this.nomePlayer = nomePlayer;
        this.escolhaPlayer = 0;
        this.placarPlayer = 0;
        this.nomeComputer = "Computer";
        this.placarComputer = 0;
        this.escolhaComputador = 0;
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
    
}

function computadorJogando() {
        return Math.floor(Math.random() *  3) +1;
}

function mecanics(Jogo){
    let ganhador;
   
    switch(Jogo.getEscolhaPlayer()) {
        case 1:
            if(Jogo.getEscolhaPlayer === 1 & Jogo.getEscolhaComputador === 2){
                return console.log(Jogo.getNomeComputer());
            } else if(Jogo.getEscolhaPlayer === 1 & Jogo.getEscolhaComputador === 3){
                return console.log(Jogo.getNomePlayer());
            } else if(Jogo.getEscolhaPlayer === 1 & Jogo.getEscolhaComputador === 1){
                return console.log(ganhador = "Empate");
            }
            break;
        case 2:

            break;
        case 3:

            break;
        default:
            console.log("Não foi");
    }
}

var game = new Jogo("teste");
game.setEscolhaPlayer(1);

game.setEscolhaComputador(computadorJogando());
mecanics(game);
