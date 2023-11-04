
let btn_jugar = document.getElementById("btn_jugar");
let recuadro = document.querySelector(".cont_recuadro_juego");

btn_jugar.addEventListener("click", () => {
    const fichaJugador1 = document.querySelector('input[name="jugador1Ficha"]:checked')
    const fichaJugador2 = document.querySelector('input[name="jugador2Ficha"]:checked')
    const nombreJugador1 = document.getElementById("nombreJugador1").value;
    const nombreJugador2 = document.getElementById("nombreJugador2").value;
    const tamanioTablero = document.getElementById("tamanioTablero").value;
    if (fichaJugador1 && fichaJugador2 && tamanioTablero) {
        let modeloFichaJugador1 = fichaJugador1.getAttribute("data-modelo");
        let modeloFichaJugador2 = fichaJugador2.getAttribute("data-modelo");
        crearJuego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2);
    }

    recuadro.style.display = "none";
    canvas.classList.remove("canvas_NoVisible");
    canvas.classList.add("canvas_visible");


});

function crearJuego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2) {
    let juego = new Juego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2);
    juego.crearEscenario();
    canvas.addEventListener("mousedown", juego.onMouseDown.bind(juego), false);
    canvas.addEventListener("mouseup", juego.onMouseUp.bind(juego), false);
    canvas.addEventListener("mousemove", juego.onMouseMove.bind(juego), false);
}