
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
                casillero.draw()
                matriz[fila][columna] = casillero;
            }
        }
        console.log(matriz);
        this.drawCasillerosValidos();
    }

    drawCasillerosValidos() {
        for (let columna = 0; columna < this.columnas; columna++) {
            const x = this.posXCasillero + columna * this.casillaWidth;
            const y = this.posYCasillero - this.casillaHeight;
            let casilleroValido = new Casillero(x, y, this.ctx, this.imagenCasilleroValido, 50, 50);
            casillerosValidos.push(casilleroValido);
            casilleroValido.draw();
        }
        console.log(casillerosValidos);
    }



}

