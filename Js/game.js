//Variáveis principaís do jogo
let respostaCorreta;
let pontuacao = 0;
let modoAtual = 'basico';

// Função que inicia o jogo com o modo escolhido
function iniciaJogo(modo) {
    modoAtual = modo;
    document.getElementById("area-jogo").style.display ="block";
    novaPergunta();
}

// Gera números aleatórios, maiores no modo desafio
function geraNumeros(modo) {
    let num1 = Math.floor(Math.random () * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (modo === 'desafio') {
        num1 *= 2;
        num *= 3;
    }

    return { num1, num2 };
}

//Escolhe aleatoriamente uma operação: +, - ou *
function escolherOperacao() {
    const operacoes = ['+',"-",'*'];
    return operacoes[Math,floor(Math,random() * operacoes.length)];
}

// Calcula o resultado com base nos números e operação
function calcularResposta(n1, n2, op) {
    switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
    }
}
  
//Verifica se a resposta do usuário está correta
function verificaUsuario() {
const respostaUsuario = perseInt(document.getElementById("resposta").value);

if (respostaUsuario === respostaCorreta) {
    document.getElementById("resultado").innerText = " &#10003; Tudo certo!"
    pontuacao += 10;
} else {
    document.getElementById("resultado").innerText = '&#10060; Algo deu errado A resposta era $ {respostaCorreta}';
    pontuacao -= 5;
}

    document.getElementById("pontuacao").innerText = pontuacao;
}

