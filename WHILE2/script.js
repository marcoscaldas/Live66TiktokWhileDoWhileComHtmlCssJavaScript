function inciarContagem(){
    const resultado = document.getElementById('resultado');
    let numero =
    Number(document.getElementById('numero').value);

    if(  !isNaN(numero) ){
        resultado.textContent = "";

        while(numero >= 0){
           const div = document.createElement('div');
           div.textContent = numero;
           resultado.appendChild(div);
           numero --;     
        }

        // LIMPAR O CAMPO DO INPUT
        document.getElementById('numero').value = ""
    }else{
        resultado.textContent = " Insira um número válido!"
    }
    
}

//EVENTO DO CLICK

document.getElementById('iniciar-contagem')
.addEventListener('click', inciarContagem);


document.getElementById('numero')
.addEventListener('keydown', function(event){

    if(event.key === 'Enter'){
        inciarContagem();       

    }
})

