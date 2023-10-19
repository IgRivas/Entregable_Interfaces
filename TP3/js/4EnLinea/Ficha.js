class Ficha {

    constructor(posX, posY, imgSrc, context) {
        this.posX = posX;
        this.posY = posY;
        this.img = new Image();
        this.img.src = imgSrc;
        this.ctx = context;

    }

    draw() {
        this.img.onload = () => {

            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, 20, 0, 2 * Math.PI);
            this.ctx.strokeStyle = 'green';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.save();
            this.ctx.clip();

            this.ctx.drawImage(this.img, this.posX - 20, this.posY - 20, 20 * 2, 20 * 2);
            this.ctx.restore();
        }

    }


}