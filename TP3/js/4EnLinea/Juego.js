let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let lastClickedFigure = null;
let isMouseDown = false;

class Juego {
    constructor(rellenoFichaJugador1, rellenoFichaJugador2, tamanioTablero) {
        this.fichas = new Array();
        this.ficheroJugador1 = new Fichero(50, 50, 200, 500, ctx);
        this.ficheroJugador2 = new Fichero(850, 50, 200, 500, ctx);
        this.imgCasillero = new Image();
        this.imgCasillero.src = './imagenes/casillero.png';
        this.imagenCasilleroValido = new Image();
        this.imagenCasilleroValido.src = "./imagenes/casilleroValido.png";
        this.tablero = new Tablero(tamanioTablero, ctx, this.imgCasillero, this.imagenCasilleroValido);
        this.imgFondo = new Image();
        this.imgFondo.src = './imagenes/4EnLinea/seccionJuego/kamehouse.jpg';
        this.jugador1 = new Jugador("Jugador1", true);//Seteamos turno
        this.jugador1.setModeloFicha(rellenoFichaJugador1);
        this.jugador2 = new Jugador("Jugador2", false);//Seteamos turno
        this.jugador2.setModeloFicha(rellenoFichaJugador2);
    }

    crearEscenario() {
        this.imgFondo.addEventListener('load', () => {
            ctx.drawImage(this.imgFondo, (canvas.width - this.imgFondo.width) / 2.5, (canvas.height - this.imgFondo.height) / 1.5);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ficheroJugador1.draw();
            this.ficheroJugador2.draw();
            this.crearFichas();
        });
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

                let fichaJugador1 = new Ficha(posXJugador1, posYJugador1, this.jugador1.getModeloFicha(), 20, ctx, "green", this.jugador1);
                let fichaJugador2 = new Ficha(posXJugador2, posYJugador2, this.jugador2.getModeloFicha(), 20, ctx, "red", this.jugador2);

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
        this.tablero.dibujarCasilleros();
    }

    findClickedFigure(x, y) {
        for (let i = 0; i < this.fichas.length; i++) {
            const element = this.fichas[i];
            if (element.isPointInside(x, y)) {
                return element;
            }
        }
    }

    onMouseDown(e) {
        isMouseDown = true;
        // Si dejo la ficha en un lugar
        if (lastClickedFigure != null) {
            lastClickedFigure = null;
        }
        //layerX y layerY son posiciones del evento del mouse
        let clickFig = this.findClickedFigure(e.offsetX, e.offsetY);
        if (clickFig != null && !clickFig.isColocado() && clickFig.getJugador().getTurno()) {
            lastClickedFigure = clickFig;
            lastClickedFigure.setClicked(true);
        }
        this.drawFigure();
    }

    onMouseUp(e) {
        isMouseDown = false;
        let x = e.offsetX;
        let y = e.offsetY;
        this.colocarFicha(x, y);
    }

    onMouseMove(e) {
        //Debo chequear a demas que el jugador le corresponde el turno
        if (isMouseDown && lastClickedFigure != null && !lastClickedFigure.isColocado()) {
            lastClickedFigure.setPosition(e.offsetX, e.offsetY);
            this.drawFigure();
        }
    }

    colocarFicha(x, y) {
        for (let i = 0; i < this.fichas.length; i++) {
            let ficha = this.fichas[i];
            //si la ficha esta siendo clickeada 
            if (ficha.estaClickeada()) {
                //es valido colocar la ficha en ese lugar
                if (this.tablero.esValidoColocarFicha(x, y)) {
                    //traigo la columna correspondiente al casilleroValido
                    let columna = this.tablero.obtenerColumnaPorPosicion(x);
                    //Se coloco la ficha correctamente
                    if (this.tablero.colocarFicha(columna, ficha)) {
                        ficha.setColocado(true);

                        if (this.tablero.chequearGanador(ficha, columna)) {
                            // this.mostrarGanador();
                            console.log("Gano alguien");
                        } else {
                            //si el turno es del jugador 1 y la ficha es del jugador 1
                            if (ficha.getJugador() == this.jugador1 && this.jugador1.getTurno() == true) {
                                //cambio el turno al jugador 2
                                this.jugador1.setTurno(false);
                                this.jugador2.setTurno(true);
                                //si el turno es del jugador 2 y la ficha es del jugador 2
                            } else {
                                //cambio el turno al jugador 1
                                this.jugador1.setTurno(true);
                                this.jugador2.setTurno(false);
                            }
                        }

                        this.drawFigure();
                    }
                }
                else if (!ficha.isColocado()) {//La devuelve a su lugar de origen si no se pudo colocar la ficha
                    ficha.volverAOrigen();
                    this.drawFigure();
                }
                ficha.setClicked(false);
            }
        }
    }

    getTurno() {
        if (this.jugador1.getTurno()) {
            return this.jugador1;
        } else {
            return this.jugador2;
        }
    }


}












