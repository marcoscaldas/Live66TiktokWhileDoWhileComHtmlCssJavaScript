document.getElementById('inserir-nome')
.addEventListener( 'click', function(){  
    let nome;

    do{
        nome = prompt('Digite seu nome');

    }while(!nome)

        document.getElementById('mensagem')
        .textContent = " Olá, " + nome + 
        "! Seja bem vindo." ;

   });