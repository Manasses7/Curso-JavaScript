
// Leia o código

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
/**
 * linha 14 - false
 * linha 15 - undefined
 */

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/**
 * O type "undefined" se dá devido a 'altura' estar fora do objeto
 */