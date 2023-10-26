let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let lastClickedFigure = null;
let isMouseDown = false;

class Juego {
    constructor(rellenoFichaJugador1, rellenoFichaJugador2,tamaniooTablero) {
        this.fichas = new Array();
        this.ficheroJugador1 = new Fichero(50, 50, 200, 500, ctx);
        this.ficheroJugador2 = new Fichero(850, 50, 200, 500, ctx);
        this.tablero = new Tablero(tamaniooTablero,ctx);
        this.imgFondo = new Image();
        this.imgFondo.src = './imagenes/4EnLinea/seccionJuego/kamehouse.jpg';
        this.jugador1 = new Jugador("Jugador1");
        this.jugador1.setModeloFicha(rellenoFichaJugador1);
        this.jugador2 = new Jugador("Jugador2");
        this.jugador2.setModeloFicha(rellenoFichaJugador2);

    }

    crearEscenario() {
        console.log("hola");
        this.imgFondo.onload = () => {
            ctx.drawImage(this.imgFondo, (canvas.width - this.imgFondo.width) / 2.5, (canvas.height - this.imgFondo.height) / 1.5);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ficheroJugador1.draw();
            this.ficheroJugador2.draw();
            this.crearFichas();
            this.tablero.draw();

        };
    }

    crearFichas() {
        // LOGICA PARA ACOMODAR LA FICHAS DENTRO DEL FICHERO
        const numFilas = 7;
        const numColumnas = 3;
        const espacioX = this.ficheroJugador1.getWidth() / numColumnas;
        const espacioY = this.ficheroJugador1.getHeight() / numFilas;

        for (let fila = 0; fila < numFilas; fila++) {
            for (let columna = 0; columna < numColumnas; columna++) {
                let posXJugador1 = this.ficheroJugador1.getPosX() + espacioX * columna + 37;
                let posYJugador1 = this.ficheroJugador1.getPosY() + espacioY * fila + 40;

                let posXJugador2 = this.ficheroJugador2.getPosX() + espacioX * columna + 37;
                let posYJugador2 = this.ficheroJugador2.getPosY() + espacioY * fila + 40;

                let fichaJugador1 = new Ficha(posXJugador1, posYJugador1, this.jugador1.getModeloFicha(), 20, ctx);
                let fichaJugador2 = new Ficha(posXJugador2, posYJugador2, this.jugador2.getModeloFicha(), 20, ctx);

                this.fichas.push(fichaJugador1, fichaJugador2);
            }
        }
        this.drawFigure();
    }

    drawFigure() {
        this.clearCanvas();
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw();
        }
    }

    clearCanvas() {
       
            ctx.drawImage(this.imgFondo, (canvas.width - this.imgFondo.width) / 2.5, (canvas.height - this.imgFondo.height) / 1.5);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ficheroJugador1.draw();
            this.ficheroJugador2.draw();
        
    }


    findClickedFigure(x, y) {
        for (let i = 0; i < this.fichas.length; i++) {
            const element = this.fichas[i];
            console.log(element.isPointInside(x,y));

            if (element.isPointInside(x, y)) {
                return element;
            }
        }
    }

    onMouseDown(e) {
        console.log("Mouse Down - X:", e.layerX, "Y:", e.layerY);

        isMouseDown = true;
        // Si dejo la ficha en un lugar
        if (lastClickedFigure != null) {
            lastClickedFigure = null;
        }
        //layerX y layerY son posiciones del evento del mouse
        let clickFig = this.findClickedFigure(e.offsetX, e.offsetY);
        if (clickFig != null) {
            lastClickedFigure = clickFig;
        }
        this.drawFigure();
    }

    onMouseUp(e) {
        isMouseDown = false;
    }

    onMouseMove(e) {
        if (isMouseDown && lastClickedFigure != null) {
            lastClickedFigure.setPosition(e.offsetX, e.offsetY);
            this.drawFigure();
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
    let juego = new Juego(modeloFichaJugador1, modeloFichaJugador2,6);
    juego.crearEscenario();
    canvas.addEventListener("mousedown", juego.onMouseDown.bind(juego), false);
    canvas.addEventListener("mouseup", juego.onMouseUp.bind(juego), false);
    canvas.addEventListener("mousemove", juego.onMouseMove.bind(juego), false);
}







