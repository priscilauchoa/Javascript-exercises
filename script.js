const posicaoA1 = document.querySelector('.a1');
const posicaoA2 = document.querySelector('.a2');
const posicaoA3 = document.querySelector('.a3');
const posicaoB1 = document.querySelector('.b1');
const posicaoB2 = document.querySelector('.b2');
const posicaoB3 = document.querySelector('.b3');
const posicaoC1 = document.querySelector('.c1');
const posicaoC2 = document.querySelector('.c2');
const posicaoC3 = document.querySelector('.c3');

const jogadorX = document.querySelector('.visivel-jogador');
const maquinaO = document.querySelector('.visivel-maquina');

const jogada = function(){

    posicaoA1.classList.toggle('visivel-jogador');
}

posicaoA1.onclick = function() {
    jogada();
    posicaoA1.onclick = null;
};


const jogada2 = function(){
    posicaoA2.classList.toggle('visivel-jogador');
}

posicaoA2.onclick = function() {
    jogada2();
    posicaoA2.onclick = null;
};

