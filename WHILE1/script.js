let i = 0;

const lista = document.getElementById('lista-numeros');

while( i <= 25){

    if(i % 2 === 0){

        const li = document.createElement('li');
        li.textContent = i;
        lista.appendChild(li);
    }
    i++;
}



