class Ficha extends Figura {
    constructor(x, y, imgSrc, radius, ctx, color, jugador) {
        super(x, y, imgSrc, ctx, 40, 40);
        this.origenX = this.x;
        this.origenY = this.y;
        this.radius = radius;
        this.clicked = false;
        this.colocado = false;
        this.color = color;
        //La ficha pertenece a un jugador
        this.jugador = jugador;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.save();
        this.ctx.clip();
        //Llamo al draw de la clase padre (figura)
        super.draw();
        this.ctx.restore();
    }

    //sobre escribo el metodo isPointInside de la clase padre (figura)
    isPointInside(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }

    //setea la posicion de la ficha
    setPosition(x, y) {
        if (!this.colocado) {
            this.x = x;
            this.y = y;
        }
    }

    setClicked(click) {
        this.clicked = click;
    }

    estaClickeada() {
        return this.clicked;
    }

    setColocado(boolean) {
        this.colocado = boolean;
    }

    isColocado() {
        return this.colocado;
    }

    //setea la posicion de la ficha a la posicion de origen
    volverAOrigen() {
        this.x = this.origenX;
        this.y = this.origenY;
    }

    getJugador() {
        return this.jugador;
    }

    getColor() {
        return this.color;
    }
}


Ficha.prototype.toString = function fichaToString() {
    var toReturn = `Jugador:${this.jugador} posX:${this.posX} posY:${this.posY}  `;
    return toReturn;
}