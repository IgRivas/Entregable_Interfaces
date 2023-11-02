class Casillero {
    constructor(x, y, ctx, imgCasillero, width, height) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.imgCasillero = imgCasillero;
        this.width = width;
        this.height = height;
        this.ficha = null;
        this.tipoDrop = null;
    }

    draw() {
        this.ctx.drawImage(this.imgCasillero, this.x, this.y, this.width, this.height);
    }

    isPointInside(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    setFicha(ficha) {
        this.ficha = ficha;
        this.ficha.setPosition(this.x + 25, this.y + 25);
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

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }
}

Casillero.prototype.toString = function fichaToString() {
    var toReturn = `Ficha:${this.ficha} posX:${this.x} posY:${this.y}  `;
    return toReturn;
}