
/**
 * 
 * Repita o exercício anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" é como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/

let turno = prompt("Em qual turno você estuda? (digite 'm' para matutino, 'v' para vespertino ou 'n' para noturno)");

tipoTurno = [ "m", "v", "n" ]

function definirTurno(turno) {
    for (let i = 0; i < tipoTurno.length; i++) {
    const element = tipoTurno[i];
    
        if (turno === element) {
        
            switch (turno) {
                case "m":
                    console.log("Bom dia!");
                    break;
                
                case "v":
                    console.log("Boa tarde!");
                    break;
                    
                case "n":
                    console.log("Boa noite!");
                    break

                default:
                    console.log("Digite um turno válido");
                    break;
            }
        }
    }
}

turno = turno.toLowerCase();
definirTurno(turno);