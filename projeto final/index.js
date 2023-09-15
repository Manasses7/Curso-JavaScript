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

        //doações para O-
        if (dado.tipoSanguineo === compativel) {
            alert(`===== LISTA DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
            
        //doações para O+ e A-
        if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-") {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
                
                //doações para A+
        if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-" || dado.tipoSanguineo === "O+" || dado.tipoSanguineo === "A-") {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
                
                //doações para B-
        if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-") {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
        
        //doações para B+
        if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "O-" || dado.tipoSanguineo === "O+" || dado.tipoSanguineo === "B-") {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
                //doações para AB-
        if (dado.tipoSanguineo === compativel || dado.tipoSanguineo === "A-" || dado.tipoSanguineo === "B-" || dado.tipoSanguineo === "O-") {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)
        }
                //doações para AB+
        if (dado) {
            alert(`===== dado DE DOADORES CADASTRADOS =====
            Nome: ${dado.nome};
            Idade: ${dado.idade} anos;
            Peso: ${dado.peso} kg;
            Tipo sanguíneo: ${dado.tipoSanguineo}.`)            
        } break
    }
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
            ultimaDoacao();
            break;
                        
        case 5:
            sair();
            break
                            
        default:
            break;
    }
}
