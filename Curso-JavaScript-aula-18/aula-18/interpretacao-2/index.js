
// Leia o código abaixo

const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
//todos os números da lista maiores que 18

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, a sintaxe "for...of..." é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Associar a variável numero = lista['posição do índice'].