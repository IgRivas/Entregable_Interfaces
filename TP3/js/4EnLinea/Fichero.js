class Fichero extends Figura {
    constructor(x, y, width, height, ctx, img) {
        super(x, y, img, ctx, width, height);
        this.width = width;
        this.height = height;
        this.ctx = ctx;

    }

    draw() {
        this.ctx.globalAlpha = 0.75;


        super.draw();
        this.ctx.globalAlpha = 1;
    }
}