class Figura {
    constructor(x, y, imgSrc, ctx, width, height) {
        this.x = x;
        this.y = y;
        if (imgSrc != null) {
            this.img = new Image();
            this.img.src = imgSrc;
        }
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x - 20, this.y - 20, this.width, this.height);
    }

    //sus hijos lo van a heredar
    isPointInside(x, y) {

    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }

    setPosX(x) {
        this.x = x;
    }

    setPosY(y) {
        this.y = y;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }

    setContext(ctx) {
        this.ctx = ctx;
    }

    getContext() {
        return this.ctx;
    }



}