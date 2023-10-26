class Casillero{
    constructor(x,y,ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}