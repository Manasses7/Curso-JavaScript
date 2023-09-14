
/**
 * 
 * Faça um programa que verifica que turno do dia um aluno estuda.
 * 
 * Peça para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/

let turno = prompt("Em qual turno você estuda? (digite 'm' para matutino, 'v' para vespertino ou 'n' para noturno)");

let tipoTurno = [ "m", "v", "n" ]

function definirTurno(turno) {

    while (turno !== tipoTurno) { //dificuldade para ativar o bloco while corretamente 

        turno = prompt("Em qual turno você estuda? (digite 'm' para matutino, 'v' para vespertino ou 'n' para noturno)");

        
        if (turno === tipoTurno[0]) {
            console.log("Bom dia!");
        }
        
        if (turno === tipoTurno[1]) {
            console.log("Boa tarde!");
        }
        
        if (turno === tipoTurno[2]) {
            console.log("Boa noite!");
        }
        
    }
}

turno = turno.toLowerCase();
definirTurno(turno);