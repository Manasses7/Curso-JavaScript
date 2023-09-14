
// Leia o código

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
	console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Verificando se o número é maior que 0 para executar o bloco if.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Para número positivos acima de 0, ele executará o bloco. -10 é menor que 0, logo não executará o bloco

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim. Aparecerá erro de sintaxe, porque a variável "mensagem" está dentro de um bloco e está sendo chamada para fora; por não ser uma variável global, ela não pode ser chamada para fora do bloco.