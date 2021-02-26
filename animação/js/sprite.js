function Sprite(img){
    /// Atributos
    this.movCima=this.movBaixo= false;
    this.movEsquerda = this.movDireita = false;
    this.srcX = this.srcY = 0;
    this.width = 24 ,this.height = 32;
    this.posX= this.posY =0;
    this.img = img;
    this.speed =5;
    this.animador=0;
    //Métodos
    this.draw = function(contexto){
        contexto.drawImage(this.img,
            this.srcX,this.srcY,
            this.width,this.height,
            this.posX,this.posY,
            this.width,this.height)
    }
    this.andar =function(){
        if(this.movCima){
            this.posY -= this.speed;
            this.srcY = this.height*1;
        }else if(this.movEsquerda){
            this.posX -= this.speed;
            this.srcY=this.height *2;
        }else if(this.movBaixo){
            this.posY += this.speed;
            this.srcY = this.height *0;
        }else if(this.movDireita){
            this.posX += this.speed;
            this.srcY = this.height *3;
        }
    }
    this.animacao = function(){
        if(this.movBaixo || this.movCima || this.movDireita || this.movEsquerda){
            this.animador++;
            if(this.animador >= 32){
                this.animador =0;
            }
            this.srcX = Math.floor(this.animador/4)* this.width;
        }
    }

}