document.getElementById('Piedra').addEventListener('click', function(){
    Game('Piedra')
})

document.getElementById('Papel').addEventListener('click', function(){
    Game('Papel')
})

document.getElementById('Tijera').addEventListener('click', function(){
    Game('Tijera')
})

function Game(eleccionUsuario){
    const opciones = ['Piedra', 'Papel', 'Tijera']
    const opcionespc = opciones[Math.floor(Math.random() * 3)]

    let resultados = ''

    if (eleccionUsuario === opcionespc){
        resultados = 'Empate!'
    } else if(
        (eleccionUsuario == 'Piedra' && opcionespc == 'Tijera') ||
        (eleccionUsuario == 'Tijera' && opcionespc == 'Papel') ||
        (eleccionUsuario == 'Papel' && opcionespc == 'Piedra')
    ){
        resultados = `Ganaste!, La Computadora eligio ${opcionespc}`

    } else{
        resultados = `Perdiste!, La Computadora eligio ${opcionespc}`
    }

    document.getElementById('Resultados') .textContent = resultados;
  
}

function Repeat(){
    document.getElementById('Resultados').textContent = ''
}


