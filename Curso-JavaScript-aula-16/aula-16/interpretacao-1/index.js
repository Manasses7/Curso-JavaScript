
// Leia o código

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza?
// O programa verifica se "numero % 2 === 0" é true para imprimir "passou no teste", se o valor for false, irá para o bloco Else.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Para números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números ímpares.