let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


class Juego {

    constructor() {
        this.fichas = new Array();
    }

    crearEscenario() {
        let img = new Image();
        img.src = './imagenes/4EnLinea/seccionJuego/kamehouse.jpg';
        img.onload = function () {
            ctx.drawImage(img, (canvas.width - img.width) / 2.5, (canvas.height - img.height) / 1.5);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(50, 50, 200, 500);
            ctx.fillRect(850, 50, 200, 500);
        };
    }

    crearFichas(rellenoFichaJugador1) {
        for (let i = 0; i < 20; i++) {
            this.generarFicha(rellenoFichaJugador1);
        }
    }

    generarFicha(relleno) {
        let ficha = new Ficha(Math.round(Math.random() * 50 + 100), Math.round(Math.random() * 400 + 100), relleno, ctx);
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
    recuadro.style.display = "none";
    canvas.classList.remove("canvas_NoVisible");
    canvas.classList.add("canvas_visible");
    crearJuego();
});

function crearJuego() {
    let juego = new Juego();
    juego.crearEscenario();
    juego.crearFichas("./imagenes/gokuFicha.png");
}
