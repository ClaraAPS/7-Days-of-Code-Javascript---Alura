//var lista = {frutas: "maçã", verduras: "pepino",carnes: "frango", laticinios:"leite",doces:"biscoito"}

let fruta = [];
let verdura = [];
let carne = [];
let laticinio = [];
let doce = [];
let add = "sim";

while (add != "não") {
    add = prompt("Você deseja adicionar uma comida em sua lista de compras? Digite 'sim' ou 'não'")
    while (add != "sim" && add != "não") {
        window.alert(`Operação não reconhecida!`);
        add = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (add === "não") {
        break;
    }

    let p1 = prompt("Você deseja adicionar uma fruta, verdura, carne, laticínio ou doce?");
    let p2 = prompt(`Digite a comida que você deseja adicionar`);

    if (p1 == "fruta") {
        fruta.push(p2);
    } else if (p1 == "verdura" ) {
        verdura.push(p2);
    } else if (p1 == "carne") {
        carne.push(p2);
    } else if (p1 == "laticínio"){
        laticinio.push(p2);
    } else if (p1 == "doce") {
        doce.push(p2);
    } else {
        window.alert("Essa categoria não foi pré definida");
    }

}

window.alert(`Lista de compras:\n  Frutas: ${fruta}\n Verduras: ${verdura} Laticínios: ${laticinio}\n  Doces: ${doce}\n  Carnes: ${carne}`);

let remove = prompt("Você deseja remover algum item da lista? Responda 'sim' ou 'não'.");

while (remove == "sim") {

    let r1 = prompt(" Você deseja remover uma fruta, verdura, carne, laticínio ou doce?");
    let r2 = prompt(`Digite a comida que você deseja remover`);
    let indice
    let f = fruta.includes(r2)
    let v = verdura.includes(r2)
    let c = carne.includes(r2)
    let l = laticinio.includes(r2)
    let d = doce.includes(r2)

    if (r1 === "fruta" && f === true) {
        indice = fruta.indexOf(r2);
        fruta.splice(indice, 1);  // splice exclui um item da lista(indice do item, quatidade de itens)
    } else if (r1 === "verdura" && v === true) {
        indice = verdura.indexOf(r2);
        verdura.splice(indice, 1);
    } else if (r1 === "carne" && c === true) {
        indice = carne.indexOf(r2);
        carne.splice(indice, 1);
    } else if (r1 === "laticinio" && l === true) {
        indice = laticinio.indexOf(r2);
        laticinio.splice(indice, 1);
    } else if (r1 === "doce" && d === true) {
        indice = doce.indexOf(r2);
        doce.splice(indice, 1);
    } else {
        window.alert("Essa categoria não foi pré definida");
    }

    remove = prompt("Você deseja remover algum item da lista? Responda 'sim' ou 'não'.");
}

window.alert(`Lista de compras:\n  Frutas: ${fruta}\n Verduras: ${verdura} Laticínios: ${laticinio}\n  Doces: ${doce}\n  Carnes: ${carne}`)
