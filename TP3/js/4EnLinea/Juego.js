let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


class Juego {

    constructor() {
        this.fichas = new Array();
        this.ficheroJugador1 = new Fichero(50, 50, 200, 500, ctx);
        this.ficheroJugador2 = new Fichero(850, 50, 200, 500, ctx);
    }

    crearEscenario() {
        let img = new Image();
        img.src = './imagenes/4EnLinea/seccionJuego/kamehouse.jpg';
        img.onload = () => {
            ctx.drawImage(img, (canvas.width - img.width) / 2.5, (canvas.height - img.height) / 1.5);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ficheroJugador1.draw();
            this.ficheroJugador2.draw();
        };
    }

    crearFichas(rellenoFichaJugador1, rellenoFichaJugador2) {
        let jugador1 = new Jugador("Jugador1");
        jugador1.setModeloFicha(rellenoFichaJugador1);
        this.generarFicha(jugador1);
        if (this.fichas.length < 20) {
            this.crearFichas(rellenoFichaJugador1, rellenoFichaJugador2);
        }

        let jugador2 = new Jugador("Jugador2");
        jugador2.setModeloFicha(rellenoFichaJugador2);
        this.generarFicha(jugador2);
        if (this.fichas.length < 20) {
            this.crearFichas(rellenoFichaJugador1, rellenoFichaJugador2);
        }
    }

    generarFicha(jugador) {
        let ficha = new Ficha(Math.round(Math.random() * this.ficheroJugador1.getPosX() + 100), Math.round(Math.random() * this.ficheroJugador1.getPosY() + 200), jugador.getModeloFicha(), ctx);
        this.fichas.push(ficha);
        this.drawFigure();
    }

    drawFigure() {
        this.crearEscenario();
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw();
        }
    }
}


let btn_jugar = document.getElementById("btn_jugar");
let recuadro = document.querySelector(".cont_recuadro_juego");

btn_jugar.addEventListener("click", () => {
    const fichaJugador1 = document.querySelector('input[name="jugador1Ficha"]:checked')
    const fichaJugador2 = document.querySelector('input[name="jugador2Ficha"]:checked')

    if (fichaJugador1 && fichaJugador2) {
        let modeloFichaJugador1 = fichaJugador1.getAttribute("data-modelo");
        let modeloFichaJugador2 = fichaJugador2.getAttribute("data-modelo");
        crearJuego(modeloFichaJugador1, modeloFichaJugador2);

    }

    recuadro.style.display = "none";
    canvas.classList.remove("canvas_NoVisible");
    canvas.classList.add("canvas_visible");


});

function crearJuego(modeloFichaJugador1, modeloFichaJugador2) {
    let juego = new Juego();

    juego.crearEscenario();
    juego.crearFichas(modeloFichaJugador1, modeloFichaJugador2);
}
