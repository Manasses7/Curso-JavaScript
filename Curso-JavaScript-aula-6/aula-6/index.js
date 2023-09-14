/*//exercício de interpretação de código
//1
let a = 10
let b = 10

console.log(b) //10

b = 5

console.log(a, b) //10, 5
*/
/*
//2
let a = 10
let b = 20
let c = a

b = c
a = b

console.log(a, b, c) //20, 20, 20
*/
/*
//3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${t/p} por hora`) //o programa divide os dias pelas horas para fazer o calculo de quanto recebe por hora
//sugestão nome de variáveis: p = horaPorDia. t = recebePorDia
*/


//exercícios práticos

/*//1
const nome = 'Manassés'
let idade = 18

console.log(typeof nome //tipo string, porque a variável possui letras
console.log(typeof idade //tipo number, porque não está entre parenteses*/

/*const nome = toString(window.prompt("Digite seu nome"))
let idade = Number(window.prompt("Digite sua idade"))

window.alert(`Olá ${nome}. Você têm ${idade}`)

console.log(typeof nome); //O console imprimiu type string
console.log(typeof idade); // O console imprimiu type number*/
/*
//2
const question1 = window.prompt("Você tem cachorro?")
const question2 = window.prompt("Você mora com seus pais?")
const question3 = window.prompt("Você gosta de abacate?")

document.write(`<p>Você tem cachorro? ${question1}`)
document.write(`<p>Você mora com seus pais? ${question2}`)
document.write(`<p>Você gosta de abacate? ${question3}`) 
*/
/*
let a = 10
let b = 25
let c = a

// Aqui faremos uma lógica para trocar os valores
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/