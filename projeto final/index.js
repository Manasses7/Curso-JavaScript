continuar = true
dados = [] 

function cadastrarDoador() {
    let doador = {
        nome: prompt("Digite seu nome completo"),
        idade : prompt("Digite sua idade"),
        peso : prompt("Digite seu peso"),
        tipoSanguineo : prompt("Digite seu tipo sanguíneo")
    }

    dados.push(doador)
    console.log(dados[dados.length -1])
}

function listaDoadores() {    
    dados.push(dados)
    console.log(dados[dados.length -1]);
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