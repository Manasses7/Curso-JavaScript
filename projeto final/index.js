continuar = true;
let dados = [];

function cadastrarDoador() {
    let doador = {
        nome: prompt("Digite seu nome completo"),
        idade : Number(prompt("Digite sua idade")),
        peso : Number(prompt("Digite seu peso")),
        tipoSanguineo: ""
    };

    let tiposSanguineos = [ "A+", "A-", "O+", "O-", "B+", "B-", "AB+", "AB-" ]
    
    while (doador.tipoSanguineo === "") {
        let tipo = prompt("Digite seu tipo sanguíneo (válido)").toUpperCase()
            
        if (tiposSanguineos.includes(tipo)) {
            doador.tipoSanguineo = tipo

        }
    }
    
    dados.push(doador);
    console.log(dados[dados.length -1]);
}

function listaDoadores() { 
    for (let i = 0; i < dados.length; i++) {
        const lista = dados[i];

    alert(`===== LISTA DE DOADORES CADASTRADOS =====
    Nome: ${lista.nome};
    Idade: ${lista.idade} anos;
    Peso: ${lista.peso} kg;
    Tipo sanguíneo: ${lista.tipoSanguineo}.`);
        
    }
}

function buscaTipoSanguineo() {
    compativel = prompt("Insira seu tipo sanguíneo para buscarmos doações compatíveis").toUpperCase();
    
    for (let dado of dados) {
        

        mensagem = `===== LISTA DE DOADORES QUE VOCÊ PODE RECEBER SANGUE =====
        Nome: ${dado.nome};
        Idade: ${dado.idade} anos;
        Peso: ${dado.peso} kg;
        Tipo sanguíneo: ${dado.tipoSanguineo}.`

        //doações para O-
        if (dado.tipoSanguineo === compativel) {
            
            console.log(mensagem);

        }
            
        //doações para O+ ou A-
        if ( compativel === "O+" || compativel === "A-") {

            if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-" ) {
                console.log(mensagem);
            }
        }
       
        
        //doações para A+
        if ( compativel === "A+" ) {

            if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "A-" || dado.tipoSanguineo === "O+" || dado.tipoSanguineo === "O-") {
                console.log(mensagem);
            }
        }
                
        //doações para B-
        if (compativel === "B-") {

            if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-"){
                console.log(mensagem);
            }

        }
        
        //doações para B+
        if (compativel === "B+") {

            if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "B-" || dado.tipoSanguineo === "O+" || dado.tipoSanguineo === "O-") {
                console.log(mensagem);
            }
            
        }

        //doações para AB-
                
        if (compativel === "AB-") {
            
            if (dado.tipoSanguineo.includes("-")) {
                console.log(mensagem);
            }
        }

        //doações para AB+
        if (dado) {
            console.log(mensagem);
            
        }
    }
}

function ultimaDoacao(ultimoElemento) {

    dados = dados.pop();

    ultimoElemento =  `===== ÚLTIMO DOADOR =====
    Nome: ${dados.nome};
    Idade: ${dados.idade} anos;
    Peso: ${dados.peso} kg;
    Tipo sanguíneo: ${dados.tipoSanguineo}.`
   
   alert(ultimoElemento);
}
        
function sair() {
    continuar = false
}


while (continuar) {

    let sistema = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== 
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`))
    
    switch (sistema) {
        case 1:
            cadastrarDoador();
            break;
            
        case 2:
            listaDoadores();
            break;
                
        case 3:
            buscaTipoSanguineo();
            break;
                    
        case 4:
            ultimaDoacao(dados);
            break;
                        
        case 5:
            sair();
            break
                            
        default:
            break;
    }
}
