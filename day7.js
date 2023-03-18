function soma(num1, num2){
    return Number(num1) + Number(num2);
}

function subtracao(num1, num2){
    return Number(num1) - Number(num2);
}

function multiplicacao(num1, num2){
    return Number(num1) * Number(num2);
}

function divisao(num1, num2){
    return Number(num1) / Number(num2);
}

let num1;
let num2;
let op = "";

do {  //usando o 'do...while', já que a primeira vez sempre vamos entrar
	
    op = prompt(`Qual operação você quer realizar? Responda soma [som], subtração [sub], multiplicação [mult], divisão [div] ou 'sair'.`);	
    while (op != "som" && op != "sub" && op != "mult" && op != "div" && op != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
	op = prompt(`Qual operação você quer realizar? Responda soma [som], subtração [sub], multiplicação [mult], divisão [div] ou 'sair'.`);
    }
	
    if (op === "sair"){  //se o texto lido for "sair", sair do loop e da calculadora
		break;	
    }
	
    num1 = prompt(`Insira o primeiro valor:`);
    num2 = prompt(`Insira o segundo valor:`);
    switch (op) {
        case 'som':
          alert(`O resultado da ${op} é ${soma(num1, num2)}`);
          break;
        case 'sub':
            alert(`O resultado da ${op} é ${subtracao(num1, num2)}`);
            break;
        case 'mult':
            alert(`O resultado da ${op} é ${multiplicacao(num1, num2)}`);
            break;
        case 'div':
            alert(`O resultado da ${op} é ${divisao(num1, num2)}`);
            break;
    }
} while(op === "som" || op === "sub" || op === "mult" || op === "div")
alert(`Até a próxima!`);