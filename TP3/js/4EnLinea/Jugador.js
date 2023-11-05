class Jugador {
    constructor(nombre, turno, modeloFicha) {
        console.log(nombre);
        this.nombre = nombre;
        this.modeloFicha = modeloFicha;
        this.turno = turno;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    getModeloFicha() {
        return this.modeloFicha;
    }

    getTurno() {
        return this.turno;
    }

    setTurno(turno) {
        this.turno = turno;
    }

}
Jugador.prototype.toString = function jugadorToString() {
    var retorno = `${this.nombre} ${this.turno} `;
    return retorno;
}