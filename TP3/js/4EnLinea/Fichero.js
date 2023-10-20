class Fichero {
    constructor(posX, posY, width, height, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.ctx = ctx;     
    }

    getPosY() {
        return this.posY;
    }

    getPosX() {
        return this.posX;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}