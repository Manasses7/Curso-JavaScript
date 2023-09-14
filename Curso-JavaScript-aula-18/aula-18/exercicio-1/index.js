
/**
 * 
 * Pergunte ao usuário quantos bichos de estimação ele tem e guarde esse dado em uma variável.
 * 
 * Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!".
 * 
 * Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.
 * Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
 * Por fim, imprima no console o "array" completo, com os nomes dos bichos.
 * 
**/

let pets = Number(prompt("Quantos bichos de estimação você tem?"))
let nomePet = []

function funcaoPet(nomePet){
    
    if (pets === 0) {
        console.log("Que pena! Você pode adotar um pet!");
    } 
    
    else for (i = 0; i < pets; i++) {
        nomePet = prompt("Insira o nome dos seus pets");
        console.log(nomePet);    

        nomePet = pets
        console.log(pets);
    }
}

funcaoPet(pets);