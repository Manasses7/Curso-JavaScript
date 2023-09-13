continuar = true;
dados = [];

function cadastrarDoador() {
    let doador = {
        nome: prompt("Digite seu nome completo"),
        idade : prompt("Digite sua idade"),
        peso : prompt("Digite seu peso"),
        tipoSanguineo : prompt("Digite seu tipo sanguíneo")
    };
    
    doador.tipoSanguineo.toUpperCase();
    
    dados.push(doador);
    console.log(dados[dados.length -1]);
}

function listaDoadores() { 
    for (let i = 0; i < dados.length; i++) {
        const lista = dados[i];

    console.log(lista);
        
    }
}

function buscaTipoSanguineo() {
    let busca = prompt("Qual seu tipo sanguíneo?");
    
    busca.toUpperCase();

    if (busca == "A+") {
        console.log(`O sangue tipo ${busca} pode receber doação do tipo:
        A+, A-, O+ e O-.
        
        Os doadores desses tipos sanguíneos são:
        
        ${dados.length -1 === "A+" || "A-" || "O+" || "O-"}`)
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
