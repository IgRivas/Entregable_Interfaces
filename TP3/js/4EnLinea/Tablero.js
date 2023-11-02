
let casillerosValidos = [];
let matriz = [];
class Tablero {
    constructor(tamanio, ctx, imagenCasillero, imagenCasilleroValido) {
        this.tamanio = tamanio;
        this.ctx = ctx;
        this.imagenCasillero = imagenCasillero;
        this.imagenCasilleroValido = imagenCasilleroValido;
        // Establezco el tamanio del tablero dependiendo el tamanio indicado
        if (this.tamanio == 4) {//4 en linea
            this.columnas = 7;
            this.filas = 6;
            this.casillaWidth = 350 / this.columnas;
            this.casillaHeight = 300 / this.filas;
            this.posXCasillero = 380;
            this.posYCasillero = 170;
        }
        if (this.tamanio == 5) {//5 en linea
            this.columnas = 8;
            this.filas = 7;
            this.casillaWidth = 360 / this.columnas;
            this.casillaHeight = 340 / this.filas;
            this.posXCasillero = 370;
            this.posYCasillero = 150;
        }
        if (this.tamanio == 6) {//6 en linea
            this.columnas = 9;
            this.filas = 8;
            this.casillaWidth = 400 / this.columnas;
            this.casillaHeight = 380 / this.filas;
            this.posXCasillero = 350;
            this.posYCasillero = 120;
        }
        this.draw();

    }

    //Esto inicializa los arreglos y matrices del tablero
    draw() {
        //recuadro de fondo
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(280, 50, 550, 500);
        for (let fila = 0; fila < this.filas; fila++) {//recorro filas
            matriz[fila] = [];//iniciamos la fila
            for (let columna = 0; columna < this.columnas; columna++) {//recorro columnas
                // Calcula las coordenadas de posición de la casilla
                const x = this.posXCasillero + columna * this.casillaWidth;
                const y = this.posYCasillero + fila * this.casillaHeight;
                let casillero = new Casillero(x, y, this.ctx, this.imagenCasillero, 50, 50);
                casillero.setTipoDrop(false);
                matriz[fila][columna] = casillero;
            }
        }

        for (let columna = 0; columna < this.columnas; columna++) {
            const x = this.posXCasillero + columna * this.casillaWidth;
            const y = this.posYCasillero - this.casillaHeight;
            let casilleroValido = new Casillero(x, y, this.ctx, this.imagenCasilleroValido, 50, 50);
            casilleroValido.setTipoDrop(true);
            casillerosValidos.push(casilleroValido);
        }
        this.dibujarCasilleros();
    }

    //Esto dibuja lo q instanciamos anteriormente
    dibujarCasilleros() {
        for (let fila = 0; fila < this.filas; fila++) {//recorro filas
            for (let columna = 0; columna < this.columnas; columna++) {//recorro columnas
                let casillero = matriz[fila][columna];
                casillero.draw();
            }
        }
        for (let columna = 0; columna < this.columnas; columna++) {
            let casilleroValido = casillerosValidos[columna];
            casilleroValido.draw();
        }
    }

    esValidoColocarFicha(x, y) {
        for (let col = 0; col < this.columnas; col++) {
            let casillero = casillerosValidos[col];
            if (casillero.getTipoDrop() && casillero.isPointInside(x, y)) {
                return true;
            }
        }
        return false;
    }

    obtenerColumnaPorPosicion(x) {
        const columnaCasillero = Math.floor((x - this.posXCasillero) / this.casillaWidth);
        if (columnaCasillero >= 0 && columnaCasillero < this.columnas) {
            return columnaCasillero;
        } else {
            return -1;
        }
    }

    colocarFicha(columna, ficha) {
        if (columna >= 0 && columna < this.columnas) {
            //recorro desde abajo para arriba
            for (let fila = this.filas - 1; fila >= 0; fila--) {
                let casillero = matriz[fila][columna];
                if (casillero.contieneFicha() === false) {
                    casillero.setFicha(ficha);
                    return true;
                }
            }
        }
        return false;
    }

    obtenerCasilleroPorFicha(ficha) {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let col = 0; col < this.columnas; col++) {
                let casillero = matriz[fila][col];
                //encontramos el casillero donde esta la ficha  
                let fichaNueva = casillero.getFicha();
                if (fichaNueva != null) {
                    if (fichaNueva == ficha) {
                        return {
                            casillero: casillero,
                            fila: fila,
                            col: col
                        };
                    }
                }

            }
        }
    }

    chequearGanador(ficha, columna) {
        //ficha del jugador, columna 3
        //obtenemos el casillero donde esta la ficha que se coloco
        let jsonCasillero = this.obtenerCasilleroPorFicha(ficha);

        if (this.chequearHorizontal(jsonCasillero, columna)) {
            return true;
        }
        return false;
    }

    chequearHorizontal(jsonCasillero, columna) {
        let fila = jsonCasillero.fila;
        let fichaCasillero = jsonCasillero.casillero.getFicha();
        let cont = 0;
        let columnaInicial = columna;
        //recorrer columnas
        while (columna < this.columnas) {
            let casilleroNuevo = matriz[fila][columna];
            if (cont == this.tamanio) {
                return true;
            }
            console.log(casilleroNuevo.getFicha());
            if(casilleroNuevo.getFicha()!=null){
                if (casilleroNuevo.getFicha().getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna++;
                }
            }else{
                columna = columnaInicial;
                break;
            }
        }
        return false;
    }

}



