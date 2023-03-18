const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);

const pergunta = prompt(`Você está gostando de estudar ${linguagem}? Responda 1 para SIM ou 2 para NÃO`);

if (pergunta == 1) {
    alert(`Muito bom! Continue estudando!`);
} 
else if ( pergunta == 2) {
    alert(`Ah que pena. Cotinue estudando para descobrir uma linguagem que você se identifica`);
} else {
    alert(`Digite 1 ou 2 para obter uma resposta`);
    pergunta = prompt(`Você está gostando de estudar ${linguagem}? Responda 1 para SIM ou 2 para NÃO`);
}