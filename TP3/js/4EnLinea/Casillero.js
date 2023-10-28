class Casillero {
    constructor(x, y, ctx, imgCasillero, width, height) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.imgCasillero = imgCasillero;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.drawImage(this.imgCasillero, this.x, this.y, this.width, this.height);
    }
}