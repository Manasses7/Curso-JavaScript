//EXERCÍCIOS DE INTERPRETAÇÃO
// Leia o c�digo

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

/**
 * 
 * a) Explique o que essa fun��o faz e qual � sua utilidade.
 * A função verifica se há a palavra "cenoura" na frase, sendo maiúscula ou minúscula e retorna true ou false.
 * 
 * 
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura. True
 * - CENOURA � bom pra vista. True
 * - Cenouras crescem na terra. False
 * 
**/



/**
 * 
 * Escreva as funções explicadas abaixo:
 * 
 * a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
 * 
 * `Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.`
 * 
 * Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
 * 
 * b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
 * 
 * `Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].`
 * 
 * Dica: na hora de criar a frase, você pode utilizar as template strings que vimos na aula anterior! As variáveis da frase, nesse caso, serão os próprios parâmetros recebidos na função.
 * 
**/
/**
function itsMeConsole(){
    console.log("Eu sou o Manassés, tenho 18 anos, moro em São Leopoldo e sou estudante");
}

itsMeConsole();

let myInformation = [ "Manassés", 18, "São Leopoldo", "estudante"]

function itsMe() {
    console.log(`Eu sou o ${myInformation[0]}, tenho ${myInformation[1]} anos, moro em ${myInformation[2]} e sou ${myInformation[3]}`);
}

itsMe();
*/

/**
 * 
 * Escreva as funções explicadas abaixo:
 * 
 * a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
 * 
 * b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
 * 
 * c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
 * 
 * d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
 * 
**/
/**
//A
function soma(n1, n2 ){
    result = n1 + n2
    return result
}

console.log(soma(5,5));
 */
/**
//B
function booleans(n1, n2) {
    n1 = prompt

    return n1>=n2
}

console.log(booleans(1,4));
*/
/**
//C
function parOrNot(n1) {
    return n1 %2 == 0
}

console.log(parOrNot(3));
*/

/** 
//D

function formatacaoDeFrase(frase) {
    return [ frase.toUpperCase(), frase.length ]
}

let frase = "frase qualquer"
let formatacao = formatacaoDeFrase(frase);

console.log(formatacao[0]);
console.log(formatacao[1]);
*/


/**
 * 
 * Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 * 
 * Peça para o usuário inserir dois números e chame essas 4 funções com esses valores inseridos pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
 * 
 * Exemplo:
 * 
 * Números inseridos: 30 e 3
 * Soma: 33
 * Diferença: 27
 * Multiplicação: 90
 * Divisão: 10
 * 
 * Dica: lembre-se de converter a entrada do usuário para número antes de fazer os cálculos.
 * 
**/

let n1 = Number(prompt("Insira o primeiro número"))
let n2 = Number(prompt("Insira o segundo número"))

function soma() {
    return n1 + n2
}

function subtracao() {
    return n1 - n2
}

function multiplicacao() {
    return n1 * n2
}

function divisao() {
    return n1 / n2
}

console.log(`Números inseridos: ${n1} e ${n2}`);
console.log(`Soma: ${soma()}`);
console.log(`Diferença: ${subtracao()}`);
console.log(`Multiplicação: ${multiplicacao()}`);
console.log(`Divisão: ${divisao()}`);