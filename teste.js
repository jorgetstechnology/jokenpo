

class Jogo{
    constructor(nomePlayer){
        this.nomePlayer = nomePlayer,
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

};

function computadorJogando() {
        return Math.floor(Math.random() *  3) +1;
}

var game = new Jogo("teste");

var Start = {
     jog : game,
     oi : 1
    };


console.log(Start.jog.getNomePlayer());