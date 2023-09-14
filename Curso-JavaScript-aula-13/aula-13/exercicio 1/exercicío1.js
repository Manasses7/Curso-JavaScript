
const filmeData = {
    nome: "Shrek",
    anoDeLancamento: 2001,
    elenco: {
        personagensPrincipais: [ "Shrek", "Princesa Fiona", "Burro", "Gato de Botas" ],
        personagensSecundarios: [ "Biscoito", "Rato Cego", "Lorde Farquaad", "Encantado"]
    },
    jaAssistido: true
}

console.log(`Nome do filme ${filmeData.nome}`);
console.log(`Ano de lançamento: ${filmeData.anoDeLancamento}`);
console.log(`Personagens pricipais: ${filmeData.elenco.personagensPrincipais}`);
console.log(`Personagens secundarios: ${filmeData["elenco"]["personagensSecundarios"]}`);
console.log(`Já assistiu esse filme? ${filmeData["jaAssistido"]}`);