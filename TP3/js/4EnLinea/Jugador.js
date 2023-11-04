class Jugador {
    constructor(nombre, turno) {
        console.log(nombre);
        this.nombre = nombre;
        this.modeloFicha = null;
        this.turno = turno;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setModeloFicha(modelo) {
        this.modeloFicha = modelo;
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

    // toString() {
    //     return {
    //         nombre: this.nombre,
    //         turno: this.turno,
    //         modeloFicha: this.modeloFicha
    //     };
    // }


}
Jugador.prototype.toString = function jugadorToString() {
    var retorno = `${this.nombre} ${this.turno} `;
    return retorno;
}