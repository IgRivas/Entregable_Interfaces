class Ficha {

    constructor(posX, posY, imgSrc, radius, context, color, jugador) {
        this.posX = posX;
        this.posY = posY;
        this.origenX = this.posX;
        this.origenY = this.posY;
        this.img = new Image();
        this.img.src = imgSrc;
        this.ctx = context;
        this.radius = radius;
        this.clicked = false;
        this.colocado = false;
        this.color = color;
        this.jugador = jugador;
    }

    draw() {


        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.save();
        this.ctx.clip();

        this.ctx.drawImage(this.img, this.posX - 20, this.posY - 20, 20 * 2, 20 * 2);
        this.ctx.restore();


    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }


    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }

    setPosition(x, y) {
        if (!this.colocado) {
            this.posX = x;
            this.posY = y;
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

    volverAOrigen() {
        this.posX = this.origenX;
        this.posY = this.origenY;
    }

    getJugador() {
        return this.jugador;
    }

    getColor() {
        return this.color;
    }

    

}