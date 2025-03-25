/*leemos las entradas de las opciones */
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");


/*leemos la entrada del resultado */

const resultadoJuego = document.getElementById("resultado");

//iniciamos el juego
piedraOpcion.addEventListener("click", () =>{
    iniciarJuego('piedra');
});

papelOpcion.addEventListener("click", () =>{
    iniciarJuego('papel');
});

tijeraOpcion.addEventListener("click", () =>{
    iniciarJuego('tijera');
});

function iniciarJuego(opcion){
    //movimiento pc
    const movPC = movimientoPc();
    //movimiento usuario
    const movUsuario = opcion;
    //comparacion de movimiento
    const comp = compracion(movPC, movUsuario);
    //resultado
    if (comp ==1) {
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='ganador'>El ganador es usted</span>";
    }
    if (comp ==2) {
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='perdedor'>El perdedor es usted</span>";
    }
    if (comp ==3) {
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='empate'>La partida es un empate</span>";
    }
}

function movimientoPc(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random()*3);
    const mov = opciones[random];
    return (mov);
}

function compracion(pc, usuario){
    switch (usuario+pc){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //empata
    }
}

let puntosJugador = 0;
let puntosComputadora = 0;

document.querySelectorAll(".opcion").forEach(opcion => {
    opcion.addEventListener("click", () => {
        let eleccionJugador = opcion.id;
        let opciones = ["piedra", "papel", "tijera"];
        let eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
        
        let resultado = determinarGanador(eleccionJugador, eleccionComputadora);
        document.getElementById("resultado").innerText = resultado;

        // Actualizar la puntuación
        if (resultado.includes("¡Ganaste!")) {
            puntosJugador++;
        } else if (resultado.includes("¡Perdiste!")) {
            puntosComputadora++;
        }

        document.getElementById("puntosJugador").innerText = puntosJugador;
        document.getElementById("puntosComputadora").innerText = puntosComputadora;
    });
});

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate!";
    }

    if ((jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}