class Casillero extends Figura {
    constructor(x, y, ctx, imgCasillero, width, height) {
        super(x, y, imgCasillero, ctx, width, height);
        this.ficha = null;
        this.tipoDrop = null;
    }

    draw() {
        super.draw();
    }

    isPointInside(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    setFicha(ficha) {
        this.ficha = ficha;
        this.ficha.setPosition(this.x + 5, this.y + 5);

    }

    eliminarFicha() {
        this.ficha = null;
    }

    getFicha() {
        return this.ficha;
    }

    contieneFicha() {
        if (this.ficha == null) {
            return false;
        } else {
            return true;
        }
    }

    setTipoDrop(boolean) {
        this.tipoDrop = boolean;
    }

    getTipoDrop() {
        return this.tipoDrop;
    }

}

Casillero.prototype.toString = function fichaToString() {
    var toReturn = `Ficha:${this.ficha} posX:${this.x} posY:${this.y}  `;
    return toReturn;
}