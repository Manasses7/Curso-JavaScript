/*//exercícios de escrita
//1
const nomeUser = prompt("Qual o nome de usuário?")
const emailUser = prompt("Qual o seu e-mail?")

console.log(`o e-mail ${emailUser} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUser}!`);*/

//2

const bestFoods = ["lasanha", " pizza", " sushi", " chocolate", " pudim"]
let foodsUser = prompt("Qual sua comida favorita?")

console.log(bestFoods);

document.write(`<p>Estas são minhas comidas favoritas: ${bestFoods}`)

bestFoods.splice(3,2)
bestFoods.push(foodsUser)
document.write(`Estas são as comidas favoritas do uruário: ${bestFoods}`)