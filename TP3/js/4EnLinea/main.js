let juego;
let btn_jugar = document.getElementById("btn_jugar");
let recuadro = document.querySelector(".cont_recuadro_juego");
let contIntervalo = document.querySelector(".intervalo_4_en_linea_noVisible");

btn_jugar.addEventListener("click", () => {
    const fichaJugador1 = document.querySelector('input[name="jugador1Ficha"]:checked')
    const fichaJugador2 = document.querySelector('input[name="jugador2Ficha"]:checked')
    const nombreJugador1 = document.getElementById("nombreJugador1").value;
    const nombreJugador2 = document.getElementById("nombreJugador2").value;
    const tamanioTablero = document.getElementById("tamanioTablero").value;
    if (nombreJugador1 != "" && nombreJugador2 != "") {
        if (fichaJugador1 && fichaJugador2 && tamanioTablero) {
            let modeloFichaJugador1 = fichaJugador1.getAttribute("data-modelo");
            let modeloFichaJugador2 = fichaJugador2.getAttribute("data-modelo");
            crearJuego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2);
        }
        recuadro.style.display = "none";
        canvas.classList.remove("canvas_NoVisible");
        canvas.classList.add("canvas_visible");

        contIntervalo.classList.remove("intervalo_4_en_linea_noVisible");
        contIntervalo.classList.add("intervalo_4_en_linea_visible");
    } else if (nombreJugador1 == "") {
        document.getElementById("nombreJugador1").style.border = "1px solid #CC3300";
    } if (nombreJugador2 == "") {
        document.getElementById("nombreJugador2").style.border = "1px solid #CC3300";
    }


});

function crearJuego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2) {
    juego = new Juego(modeloFichaJugador1, modeloFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2);
    juego.crearEscenario();
    canvas.addEventListener("mousedown", juego.onMouseDown.bind(juego), false);
    canvas.addEventListener("mouseup", juego.onMouseUp.bind(juego), false);
    canvas.addEventListener("mousemove", juego.onMouseMove.bind(juego), false);
}

let botonesReiniciar = document.querySelectorAll(".btn_volverAJugar");

botonesReiniciar.forEach(boton => {
    boton.addEventListener("click", () => {
        recuadro.style.display = "block";
        canvas.classList.remove("canvas_visible");
        canvas.classList.add("canvas_NoVisible");
        let contGanador = document.getElementById("contGanador");
        contGanador.style.display = "none";
        contIntervalo.classList.add("intervalo_4_en_linea_noVisible");
        contIntervalo.classList.remove("intervalo_4_en_linea_visible");
        juego.tablero.reiniciarTablero();
    });
});
