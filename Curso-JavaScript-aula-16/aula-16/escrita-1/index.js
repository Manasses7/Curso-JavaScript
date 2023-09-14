

/**
 * 
 * Faça um programa que ergunta ao usuário a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).
 * 
 * a) Faça um "prompt" para receber a idade do usuário e guarde em uma variável.
 * 
 * b) Garanta que essa variável é do tipo "Number".
 * 
 * c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
 * 
**/

let yearAge = Number(prompt("Qual sua idade?"));

function yearAgeToDrive(yearAge) {
    if (yearAge >= 18) {
        console.log("Você pode dirigir");
    } else {
        console.log("Você não pode dirigir");
    }
}

yearAgeToDrive(yearAge);