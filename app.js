// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let dato = document.getElementById('amigo').value;
    debugger;
    if (dato.trim() ==""){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(dato);
        document.querySelector('#amigo').value ='';
        ActualizarListaAmigos();
    }
    

}

function ActualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";
    let elementos ="";
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        elementos = elementos + `<li>${element}</li>`;
    }

    lista.innerHTML =elementos;

}

function LimpiarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";
}

function sortearAmigo() {
    
    console.log(amigos.length);
    if (amigos.length == 0)  {
        alert('No hay amigos disponibles.');
    } else {
        let numeroSorteado = Math.floor(Math.random()*amigos.length)+1;

        console.log(numeroSorteado);
        LimpiarLista();
        let amigosecreto = document.getElementById('resultado');
        amigosecreto.innerHTML ='El amigo secreto sorteado es: '+amigos[numeroSorteado-1];

    }
}