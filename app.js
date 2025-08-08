// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigoInput= document.getElementById('amigo').value;

    if(amigoInput == ''){
        alert('Por favor escribe un nombre valido');
        return;
    }
    amigos.push(amigoInput);
    limpiarCaja();
    listarAmigos(amigoInput);
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function listarAmigos(elemento){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML += `<li>${elemento}</li>`;
}

function limpiarLista(){
      document.getElementById('listaAmigos').innerHTML = '';
}

function sortearAmigo(){
    if(amigos.length > 0){
        limpiarLista();
        let tamañoArray = amigos.length;
        let resultado = Math.floor(Math.random()*tamañoArray);
        document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigos[resultado]}</li>`;
    }
    else{
        alert('Primero tiene que agregar amigos');
        return;
    }
    
}