
let casillerosValidos = [];
let matriz = [];
class Tablero extends Figura {
    constructor(tamanio, ctx, imagenCasillero, imagenCasilleroValido) {
        super(0, 0, null, ctx, 0, 0);
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
        if (this.tamanio == 7) {
            this.columnas = 10;
            this.filas = 9;
            this.casillaWidth = 440 / this.columnas;
            this.casillaHeight = 410 / this.filas;
            this.posXCasillero = 340;
            this.posYCasillero = 120;
        }
        this.draw();

    }

    //Esto inicializa los arreglos y matrices del tablero
    draw() {
        //recuadro de fondo
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        // this.ctx.fillRect(280, 50, 550, 500);
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

    // Quiero refactorizar este metodo para q devuelva un json con el casillero y la fila
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
        //recorro las columnas para ver en cual esta el mouse y devuelvo la columna
        //El calculo hace: (posicion del mouse - posicion del casillero) / ancho de la casilla
        //Esto me da la columna donde esta el mouse
        const columnaCasillero = Math.floor((x - this.posXCasillero) / this.casillaWidth);
        if (columnaCasillero >= 0 && columnaCasillero < this.columnas) {
            return columnaCasillero;
        } else {
            return -1;
        }
    }

    colocarFicha(columna, ficha) {
        //recorro desde abajo para arriba
        for (let fila = this.filas - 1; fila >= 0; fila--) {
            let casillero = matriz[fila][columna];
            if (casillero.contieneFicha() === false) {
                casillero.setFicha(ficha);
                return true;
            }
        }
        return false;
    }

    //Obtenemos el casillero donde esta la ficha
    obtenerCasilleroPorFicha(ficha) {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let col = 0; col < this.columnas; col++) {
                let casillero = matriz[fila][col];
                //encontramos el casillero donde esta la ficha  
                let fichaNueva = casillero.getFicha();
                if (fichaNueva != null) {
                    if (fichaNueva == ficha) {
                        //retornamos un json con el casillero y la fila
                        return {
                            casillero: casillero,
                            fila: fila
                        };
                    }
                }
            }
        }
    }

    empate() {
        //Recorro toda la matriz
        for (let fila = 0; fila < this.filas; fila++) {
            for (let col = 0; col < this.columnas; col++) {
                let casillero = matriz[fila][col];
                //Si el casillero no contiene una ficha, significa que todavia no se lleno el tablero
                if (casillero.contieneFicha() === false) {
                    return false;
                }
            }
        }
        //recorri todo y esta todo lleno, entonces es empate
        return true;
    }

    chequearGanador(ficha, columna) {
        let jsonCasillero = this.obtenerCasilleroPorFicha(ficha);
        if (this.chequearHorizontal(jsonCasillero, columna)) {
            return true;
        }
        if (this.chequearVertical(jsonCasillero, columna)) {
            return true;
        }
        if (this.chequearDiagonal(jsonCasillero, columna)) {
            return true;
        }
        return false;
    }

    chequearHorizontal(jsonCasillero, columna) {
        let cont = 0;
        if (this.chequearHorizontalDerecha(cont, jsonCasillero.fila, jsonCasillero.casillero.getFicha(), columna, columna)) {
            return true;
        }
    }

    chequearHorizontalDerecha(cont, fila, fichaCasillero, columnaInicial, columna) {
        //Itero mientras sea una columna valida
        while (columna < this.columnas) {
            let casilleroNuevo = matriz[fila][columna];
            //Si llego a la cantidad de fichas ganadoras, retorno true
            if (cont == this.tamanio) {
                return true;
            }
            //Si el casillero tiene una ficha
            if (casilleroNuevo.getFicha() != null) {
                //Si la ficha es del mismo jugador, aumento el contador y avanzo a la siguiente columna
                if (casilleroNuevo.getFicha().getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna++;
                }
                else {
                    //Si no es del mismo jugador, reinicio el contador y la columna y voy a chequear a la izquierda
                    columna = columnaInicial;
                    return this.chequearHorizontalIzquierda(cont - 1, fila, fichaCasillero, columnaInicial, columna);
                }
                //Si el casillero no tiene una ficha, reinicio el contador y la columna y voy a chequear a la izquierda
            } else {
                columna = columnaInicial;
                return this.chequearHorizontalIzquierda(cont - 1, fila, fichaCasillero, columnaInicial, columna);
            }
        }
        //Chequeo a la izquierda si se pasa de la columna
        columna = columnaInicial;
        return this.chequearHorizontalIzquierda(cont - 1, fila, fichaCasillero, columnaInicial, columna);
    }

    chequearHorizontalIzquierda(cont, fila, fichaCasillero, columnaInicial, columna) {
        //Itero mientras sea una columna valida y la columaneste dentro del rango, osea no llege a -1
        while (columna < this.columnas && columna >= 0) {
            let casilleroNuevo = matriz[fila][columna];
            //Si llego a la cantidad de fichas ganadoras, retorno true
            if (cont == this.tamanio) {
                return true;
            }

            if (casilleroNuevo.getFicha() != null) {
                //Si la ficha es del mismo jugador, aumento el contador y avanzo a la siguiente columna, osea a la izquierda
                if (casilleroNuevo.getFicha().getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna--;
                }
                else {
                    columna = columnaInicial;
                    return false;
                }
            } else {
                columna = columnaInicial;
                return false;
            }
        }
        if (cont == this.tamanio) {
            return true;
        }
        return false;
    }

    chequearVertical(jsonCasillero, columna) {
        let cont = 0;
        if (this.chequearVerticalAbajo(cont, jsonCasillero.fila, jsonCasillero.casillero.getFicha(), jsonCasillero.fila, columna)) {
            return true;
        }
    }

    chequearVerticalAbajo(cont, fila, fichaCasillero, filaInicial, columna) {
        //Itero mientras sea una fila valida
        while (fila < this.filas) {
            //Este chqueo cubre el caso donde la ficha se coloca en la fila 0
            if (cont == this.tamanio) {
                return true;
            }
            let casilleroNuevo = matriz[fila][columna];
            if (casilleroNuevo.getFicha() != null) {
                //Si la ficha es del mismo jugador, aumento el contador y avanzo a la siguiente fila, osea para abajo
                if (casilleroNuevo.getFicha().getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    fila++;
                } else {
                    fila = filaInicial;
                    return false
                }
            } else {
                fila = filaInicial;
                return false
            }
        }
        //Lo hacemos aca tambien, si no se pasa de la fila q itera y nunca se comprueba
        if (cont == this.tamanio) {
            return true;
        }
        return false;
    }

    chequearDiagonal(jsonCasillero, columna) {
        let cont = 0;
        if (this.chequearDiagonalIzquierdaArriba(cont, jsonCasillero.casillero.getFicha(), columna, columna, jsonCasillero.fila, jsonCasillero.fila)) {
            return true;
        }
        if (this.chequearDiagonalIzquierdaAbajo(cont, jsonCasillero.casillero.getFicha(), columna, columna, jsonCasillero.fila, jsonCasillero.fila)) {
            return true;
        }
    }

    chequearDiagonalIzquierdaArriba(cont, fichaCasillero, columnaInicial, columna, filaInicial, fila) {
        //Itero mientras sea una columna valida y la columna este dentro del rango, osea no llege a -1 y la fila lo mismo
        while (columna < this.columnas && fila < this.filas && columna >= 0 && fila >= 0) {
            if (cont == this.tamanio) {
                return true;
            }
            let casilleroNuevo = matriz[fila][columna];
            let ficha = casilleroNuevo.getFicha();
            if (ficha != null) {
                //Si la ficha es del mismo jugador, aumento el contador y avanzo a la siguiente columna y fila, osea a la izquierda y arriba
                if (ficha.getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna--;
                    fila--;
                } else {
                    //Si no es del mismo jugador, reinicio el contador y la columna y voy a chequear a la derecha y abajo
                    columna = columnaInicial;
                    fila = filaInicial;
                    return this.chequearDiagonalDerechaAbajo(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
                }
            } else {
                //Si no hay ficha, reinicio el contador y la columna y voy a chequear a la derecha y abajo
                columna = columnaInicial;
                fila = filaInicial;
                return this.chequearDiagonalDerechaAbajo(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
            }
        }
        columna = columnaInicial;
        fila = filaInicial;
        return this.chequearDiagonalDerechaAbajo(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
    }

    chequearDiagonalDerechaAbajo(cont, fichaCasillero, columnaInicial, columna, filaInicial, fila) {

        while (columna < this.columnas && fila < this.filas) {
            let casilleroNuevo = matriz[fila][columna];
            let ficha = casilleroNuevo.getFicha();
            if (ficha != null) {
                if (ficha.getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna++;
                    fila++;
                } else {
                    columna = columnaInicial;
                    fila = filaInicial;
                    return false;
                }
            } else {
                columna = columnaInicial;
                fila = filaInicial;
                return false;
            }
        }
        if (cont == this.tamanio) {
            return true;
        }
        return false;
    }

    chequearDiagonalIzquierdaAbajo(cont, fichaCasillero, columnaInicial, columna, filaInicial, fila) {
        while (columna < this.columnas && fila < this.filas && columna >= 0 && fila >= 0) {
            let casilleroNuevo = matriz[fila][columna];
            let ficha = casilleroNuevo.getFicha();
            if (ficha != null) {
                if (ficha.getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna--;
                    fila++;
                } else {
                    columna = columnaInicial;
                    fila = filaInicial;
                    return this.chequearDiagonalDerechaArriba(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
                }
            } else {
                columna = columnaInicial;
                fila = filaInicial;
                return this.chequearDiagonalDerechaArriba(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
            }
        }
        //Lo hacemos aca, se pasa del rango y no se comprueba
        if (cont == this.tamanio) {
            return true;
        }
        columna = columnaInicial;
        fila = filaInicial;
        return this.chequearDiagonalDerechaArriba(cont - 1, fichaCasillero, columnaInicial, columna, filaInicial, fila);
    }

    chequearDiagonalDerechaArriba(cont, fichaCasillero, columnaInicial, columna, filaInicial, fila) {
        while (columna < this.columnas && fila < this.filas && columna >= 0 && fila >= 0) {
            //Lo hacemos aca, si no se pasa de casillero y como no tiene ficha o no es del mismo jugador retorna false
            if (cont == this.tamanio) {
                return true;
            }
            let casilleroNuevo = matriz[fila][columna];
            let ficha = casilleroNuevo.getFicha();
            if (ficha != null) {
                if (ficha.getJugador() == fichaCasillero.getJugador()) {
                    cont++;
                    columna++;
                    fila--;
                } else {
                    columna = columnaInicial;
                    fila = filaInicial;
                    return false;
                }
            } else {
                columna = columnaInicial;
                fila = filaInicial;
                return false;
            }
        }

        return false;
    }

    reiniciarTablero() {
        matriz = [];
        casillerosValidos = [];
    }
}



