let listaNumSorteado = [];
let numLimite = 10;
let numSecreto = numAle();
let tentativas = 1;

function Tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    Tela('h1', 'Jogo do número secreto');
    Tela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numSecreto) {
        Tela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas= `Você descobriu com ${tentativas} ${palavraTentativa}!`;
        Tela('p',mensagemTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) {
            Tela('p','O número secreto é menor');
        } else {
            Tela('p','O número secreto é maior');
        }
        tentativas++;
    }
}

function numAle() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementosLista = listaNumSorteado.length;

    if (qtdElementosLista == 3) {
        listaNumSorteado = [];
    }
    if (listaNumSorteado.includes(numEscolhido)) { return numAle(); } else { 
        listaNumSorteado.push(numEscolhido);
        console.log("listaNumSorteado");
        return numEscolhido; }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numSecreto = numAle();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}