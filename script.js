const posicaoA1 = document.querySelector('.a1');
const posicaoA2 = document.querySelector('.a2');
const posicaoA3 = document.querySelector('.a3');
const posicaoB1 = document.querySelector('.b1');
const posicaoB2 = document.querySelector('.b2');
const posicaoB3 = document.querySelector('.b3');
const posicaoC1 = document.querySelector('.c1');
const posicaoC2 = document.querySelector('.c2');
const posicaoC3 = document.querySelector('.c3');

let vezDo = 'xis';
let matriz = [
    [null,null,null],
    [null,null,null], 
    [null,null,null]
];

function verificaJogo() {

    // escrever a logica da verificacao do jogo utilizando a matriz
}

function preencheMatriz(identificador, simbolo) {

    // poderia ser um monte de if e else if no lugar do switch
    switch(identificador) {
        case 'a1': matriz[0][0] = simbolo; break;
        case 'a2': matriz[0][1] = simbolo; break;
        case 'a3': matriz[0][2] = simbolo; break;
        case 'b1': matriz[1][0] = simbolo; break;
        case 'b2': matriz[1][1] = simbolo; break;
        case 'b3': matriz[1][2] = simbolo; break;
        case 'c1': matriz[2][0] = simbolo; break;
        case 'c2': matriz[2][1] = simbolo; break;
        case 'c3': matriz[2][2] = simbolo; break;
    }
}

function realizaJogada(elemento) {


    // pegar identificador do item clicado e preenche a matriz no javascript
    preencheMatriz(elemento.srcElement.className, vezDo); // ex: b1, c3, a2

    // coloca no grid xis ou bola
    elemento.srcElement.classList.toggle(vezDo);
    elemento.srcElement.onclick = null;

    if (vezDo === 'xis') {
        vezDo = 'bola';
    } else {
        vezDo = 'xis';
    }

    verificaJogo();
};

posicaoA1.onclick = realizaJogada;
posicaoA2.onclick = realizaJogada;
posicaoA3.onclick = realizaJogada;
posicaoB1.onclick = realizaJogada;
posicaoB2.onclick = realizaJogada;
posicaoB3.onclick = realizaJogada;
posicaoC1.onclick = realizaJogada;
posicaoC2.onclick = realizaJogada;
posicaoC3.onclick = realizaJogada;

