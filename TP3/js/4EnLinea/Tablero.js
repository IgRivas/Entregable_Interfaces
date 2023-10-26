class Tablero{
    constructor(tamanio, ctx) {
        this.tamanio = tamanio;
        this.ctx = ctx; 
        // Establezco el tamanio del tablero dependiendo el tamanio indicado
        console.log(tamanio);
        console.log(tamanio == 4);
        if(this.tamanio==4){//4 en linea
            this.columnas = 7;
            this.filas = 6;
        }
        if(this.tamanio ==5){//5 en linea
            this.columnas = 8;
            this.filas = 7;
        }
        if(this.tamanio == 6){//6 en linea
            this.columnas = 9;
            this.filas = 8;
        }

    }
    draw(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(280, 50, 550, 500);
        const casillaWidth = 400 / this.columnas;
        const casillaHeight = 400 / this.filas;
        let matriz = [];
        for(let fila = 0;fila<this.filas;fila++){//recorro filas
            matriz[fila] = [];//iniciamos la fila
            for(let columna = 0;columna<this.columnas;columna++){//recorro columnas
                // Calcula las coordenadas de posición de la casilla
                const x = 380 + columna * casillaWidth;
                const y = 130 + fila * casillaHeight;
                let casillero = new Casillero(x, y,this.ctx);
                casillero.draw()
                matriz[fila][columna] = casillero;
            }
        }
        console.log(matriz);
    }


}

