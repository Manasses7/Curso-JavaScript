
// Qual seria o resultado impresso no console, se o usuário digitasse o número "4"?
//O programa pega o número digitado no prompt e transforma a quantidade em linhas com "*" contendo espaço entre eles. Será impresso "* * * *"

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas")) //3

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}