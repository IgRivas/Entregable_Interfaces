let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let lastClickedFigure = null;
let isMouseDown = false;

class Juego {
    constructor(rellenoFichaJugador1, rellenoFichaJugador2, tamanioTablero, nombreJugador1, nombreJugador2) {
        this.fichas = new Array();
        this.nombreJugador1 = nombreJugador1;
        this.nombreJugador2 = nombreJugador2;
        this.ficheroJugador1 = new Fichero(50, 60, 220, 500, ctx, './imagenes/fichero.png');
        this.ficheroJugador2 = new Fichero(860, 60, 220, 500, ctx, './imagenes/fichero.png');
        this.tablero = new Tablero(tamanioTablero, ctx, './imagenes/casillero.png', "./imagenes/casilleroValido.png");
        this.imgFondo = new Image();
        this.imgFondo.src = './imagenes/4EnLinea/seccionJuego/kamehouse.jpg';
        this.jugador1 = new Jugador(this.nombreJugador1, true, rellenoFichaJugador1);//Seteamos turno
        this.jugador2 = new Jugador(this.nombreJugador2, false, rellenoFichaJugador2);//Seteamos turno
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
        //con 46 fichas por lado, alcanza para cualquier 4 en linea disponible en el momento
        const numFilas = 23;
        const numColumnas = 2;
        const espacioX = this.ficheroJugador1.getWidth() / numColumnas - 40;
        const espacioY = this.ficheroJugador1.getHeight() / numFilas - 5;

        for (let fila = 0; fila < numFilas; fila++) {
            for (let columna = 0; columna < numColumnas; columna++) {
                let posXJugador1 = this.ficheroJugador1.getPosX() + espacioX * columna + 50;
                let posYJugador1 = this.ficheroJugador1.getPosY() + espacioY * fila + 40;

                let posXJugador2 = this.ficheroJugador2.getPosX() + espacioX * columna + 50;
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
                        //la ficha se coloco se setea en true
                        ficha.setColocado(true);
                        //Cada vez que se coloca una ficha se chequea si hay ganador
                        if (this.tablero.chequearGanador(ficha, columna)) {
                            //si gano alguien
                            this.mostrarGanador(ficha.getJugador());

                            console.log("Gano alguien");
                        } else if (this.tablero.empate()) {
                            console.log("Empate");
                        } else {
                            //si el turno es del jugador 1 y la ficha es del jugador 1
                            if (ficha.getJugador() == this.jugador1 && this.jugador1.getTurno() == true) {
                                //cambio el turno al jugador 2
                                this.jugador1.setTurno(false);
                                this.jugador2.setTurno(true);
                            } else {
                                //si el turno es del jugador 2 y la ficha es del jugador 2
                                //cambio el turno al jugador 1
                                this.jugador1.setTurno(true);
                                this.jugador2.setTurno(false);
                            }
                        }
                        //dibujo la ficha en el casillero correspondiente
                        this.drawFigure();
                    }
                }
                //La devuelve a su lugar de origen si no se pudo colocar la ficha
                else if (!ficha.isColocado()) {
                    ficha.volverAOrigen();
                    this.drawFigure();
                }
                ficha.setClicked(false);
            }
        }
    }


    mostrarGanador(jugador) {
        //Reinicio el juego
        this.fichas = new Array();
        this.tablero.reiniciarTablero();

        //Muestro el ganador
        let contGanador = document.getElementById("contGanador");
        contGanador.style.display = "block";
        let ganador = document.querySelector(".ganador");
        ganador.innerHTML = `Ganador: ${jugador.getNombre()}`;

        // Desactiva los eventos de mouse para que no se puedan realizar más jugadas.
        canvas.removeEventListener("mousedown", this.onMouseDown);
        canvas.removeEventListener("mouseup", this.onMouseUp);
        canvas.removeEventListener("mousemove", this.onMouseMove);

    }

    getTurno() {
        if (this.jugador1.getTurno()) {
            return this.jugador1;
        } else {
            return this.jugador2;
        }
    }


}












