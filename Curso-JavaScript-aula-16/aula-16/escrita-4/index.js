
/**
 * 
 * Considere a situação
 * 
 * Você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso custar menos de 15 reais.
 * 
 * Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
 * 
 * Caso positivo, imprima no console a mensagem: "Bom filme", caso contrário, imprima "Escolha outro filme :(".
 * 
**/

let movieGenre = Number(prompt("Qual filme desejas asssitir? 1 - ação. 2 - aventura. 3 - romance. 4 - fantasia."))

genders = {

    actionGenre : {
        action1 : {
            name: "homem aranha",
            value: 30
        },
        
        action2 : {
            name: "Velozes e Furiosos",
            value: 30
        }
    },

    adventureGenre : {
        adventure1 : {
            name : "Indiana Jones",
            value : 20
        },
        adventure2 : {
            name : "Shrek",
            value: 30
        }
    },

    novelGenre : {
        novel1 : {
            name : "Como eu era antes de você",
            value : 15
        },
        novel2 : {
            name : "Simplesmente acontece",
            value : 20
        }
    },

    fantasyGenre : {
        fantasy1 : {
            name: "Harry Potter",
            value: 15
        },
        fantasy2 : {
            name : "Vingadores - Ultimato",
            value : 16
        }
    }
}
    


let messageError = "Escolha outro filme :("
let msgAllRight = "Bom filme! :)"


function validmovie(gender) {

    
    
    switch (gender) {
        
        
        case 1:
            let actionChoice = Number(prompt(`Escolha um filme de ação: 1 - ${genders.actionGenre.action1.name}. 2 - ${genders.actionGenre.action2.name}`))
            
            switch (actionChoice) {
                case 1:
                
                    if (genders.actionGenre.action1.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }

                break;
                
                case 2:
                      
                    if (genders.actionGenre.action2.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                break;

                default: alert("Opção inválida");
                    break;
            }
            break;

        case 2:
            let adventureChoice = Number(prompt(`Escolha um filme de aventura: 1 - ${genders.adventureGenre.adventure1.name}. 2 - ${genders.adventureGenre.adventure2.name}`))
            
            switch (adventureChoice) {
                case 1:
                    
                    if (genders.adventureGenre.adventure1.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                break;

                case 2:

                    if (genders.adventureGenre.adventure2.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                break;

                default: alert("Opção inválida");
                    break;
            }
            break;

        case 3:
            let novelChoice = Number(prompt(`Escolha um filme de romance: 1 - ${genders.novelGenre.novel1.name}. 2 - ${genders.novelGenre.novel2.name}`))
            
            switch (novelChoice) {
                case 1:
                
                    if (genders.novelGenre.novel1.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }    
                break;
                    
                case 2:
                        
                    if (genders.novelGenre.novel2.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                    break;
                        
                    default: alert("Opção inválida");
                        break;
                        
                }
                break;

        case 4:
            let fantasyChoice = Number(prompt(`Escolha um filme de aventura: 1 - ${genders.fantasyGenre.fantasy1.name}. 2 - ${genders.fantasyGenre.fantasy2.name}`))
                        
            switch (fantasyChoice) {
                case 1:
                                
                    if (genders.fantasyGenre.fantasy1.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                break;
                                
                case 2:
                                    
                    if (genders.fantasyGenre.fantasy2.value > 15 || movieGenre !== 4) {
                        console.log(messageError);
                    } else {
                        console.log(msgAllRight);
                    }
                    break;
                                    
                    default: alert("Opção inválida");
                        break;
                                    
                }
                break;
                                
                default: alert("Opção inválida");
                    break;
    }                            
}

validmovie(movieGenre);