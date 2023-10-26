class Ficha {

    constructor(posX, posY, imgSrc, radius, context) {
        this.posX = posX;
        this.posY = posY;
        this.img = new Image();
        this.img.src = imgSrc;
        this.ctx = context;
        this.radius = radius;
    }

    draw() {


            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.ctx.strokeStyle = 'green';
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
        this.posX = x;
        this.posY = y;
    }
}