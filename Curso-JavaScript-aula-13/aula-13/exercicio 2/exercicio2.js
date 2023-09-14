let dataPerson = {
    name: "Manassés",
    yearOld: 18,
    musicGender: "Rock🤘"
}

document.write(`<h1>O nome da pessoa é ${dataPerson.name}, ele tem ${dataPerson.yearOld} anos e gosta muito de ${dataPerson.musicGender}</h1>`);

function toChangeDataPerson(pessoaOriginal) {
    
    const clone = {
        ...pessoaOriginal, 
        comidaFavorita : [ "lasanha", "pizza" ],
        melhorAmigo: {
            nome: "Gasparzinho",
            idade: 1450
        } 
    }
}
console.log(`O nome da pessoa é ${clone.melhorAmigo}e suas comidas preferidas são , e . Seu melhor amigo se chama e tem anos`);
toChangeDataPerson(dataPerson)
