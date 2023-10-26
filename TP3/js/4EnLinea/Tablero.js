class Tablero{
    constructor(tamanio, ctx) {
        this.tamanio = tamanio;
        this.ctx = ctx; 
        this.tableroMat = [];

    }
    draw(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        if(this.tamanio == 6)
        this.ctx.fillRect(280, 50, 550, 500);
        for(let i = 0; i<= 9; i++){
            this.tableroMat.push([i]);
            }
            console.log(this.tableroMat);

        }
    }

