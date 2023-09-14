
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profissão. 
 * 
 * b) Escreva uma "função" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informações:
 * - O valor de "nome".
 * - O numero de caracteres do valor "nome".
 * - O valor de "idade".
 * - O valor de "profissão".
 * - O numero de caracteres do valor "profissão".
 * 
**/

let user1 = {
    nome: "Augusto",
    idade: 27,
    profissao: "Engenheiro de Software"
}

let user2 = {
    nome: "Manassés",
    idade: 23,
    profissao: "Programador back-end"
}


function organizeUsers(infoUser){

    return [ infoUser.nome , infoUser.nome.length , infoUser.idade , infoUser.profissao , infoUser.profissao.length]
}


console.log(organizeUsers(user1));
console.log(organizeUsers(user2));

