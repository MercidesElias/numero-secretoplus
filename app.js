/*alert("Boas vindas ao jogo de Blackjack!");
console.log("Iniciando o jogo...");

//alert("Estou aprendendo JavaScript");
let nomeUsuario = prompt("Digite seu nome");
alert("Olá, " + nomeUsuario + "! Vamos jogar?");

if (nomeUsuario == "Mercides") {
    alert("Olá," + nomeUsuario +"! Você é o usuário especial! ");
} else {
    alert("Usuario " + nomeUsuario +" você não é VIP ");
}

let numeroSecreto = 10 ;
let chute = prompt("Digite um número entre 1 e 10:");
if (numeroSecreto == chute) {
  alert("Parabéns! Você acertou o número secreto.");
} else {
  alert("Que pena! O número secreto seria " + numeroSecreto + ".");
  console.log("Que pena! O número secreto seria " + numeroSecreto + "."); 
}*/
 
alert('Bem-vindo ao jogo do número secreto')
let chute = prompt('Escolha um número entre 1 e 10')

let numeroSecreto = 4

console.log(chute == numeroSecreto)
if (chute == numeroSecreto) {
    alert('Acertou')
} else {
    alert('O número secreto era ' + numeroSecreto)
}



