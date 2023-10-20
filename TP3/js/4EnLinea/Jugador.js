class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.modeloFicha = null;
    }

    setModeloFicha(modelo) {
        this.modeloFicha = modelo;
    }

    getModeloFicha() {
        return this.modeloFicha;
    }
}