let p1 = prompt('Para qual área da programação você quer seguir? Digite 1 para Front-End ou 2 pra Back-End.');
var r;

if (p1 == 1) {
    let p2 = prompt('Qual tecnologia você gostaria de aprender? Digite 1 para React ou 2 para Vue.');
    r = 'Front-End';
} else if (p1 == 2) {
    let p3 = prompt('Qual tecnologia você gostaria de aprender? Digite 1 para C# ou 2 para Java.');
    r = 'Back-End';
}

let p4 = prompt(`Se você gostaria de se especializar em ${r} digite 1 ou se tornar um Fullstack, digite 2.`);

//let p5 = prompt(`Quais tecnologias você gostaria de aprender? Digite 1 para sair`);

//while (p5 != '1') {
//    res.innerHTML += ` ${p5}`;
//    let p6 = prompt(`Mais alguma tecnologia? Digite 1 para sair`)
//}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}