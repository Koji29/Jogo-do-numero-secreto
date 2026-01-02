let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    tentativas++;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobiu o número correto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "Tente um número menor...");
        } else{
            exibirTextoNaTela("p", "Tente um número maior...");
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosLista = listaDeNumerosSorteados.length;

    if(quantidadeNumerosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
