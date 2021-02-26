(function(){
//Canvas
let canvas = document.querySelector('canvas');
let contexto = canvas.getContext('2d');


//Vetores

let sprites=[];
let blocos=[];

//Objetos
let personagem = new Sprite(50,175,50,50,"#00f");
personagem.speed=10;
sprites.push(personagem);

let bloco1 = new Sprite(500,100,50,50,"#f00");
sprites.push(bloco1);

let bloco2 = new Sprite(300,300,50,50,'#0f0');
sprites.push(bloco2);
//funcoes


    //Teclas
let esquerda =37 ,direita =39, cima=38,baixo=40;

let movEsquerda=movDireita=movCima=movBaixo=false;

addEventListener('keydown',pressionaDown);
addEventListener('keyup',soltaTecla);

function pressionaDown(e){
    let teclas = e.keyCode;

    switch(teclas){
        case esquerda:
            movEsquerda =true;
            break;
        case direita:
            movDireita = true;
            break;
        case cima:
            movCima = true;
            break;
        case baixo:
            movBaixo = true;
            break;

    }
}


function soltaTecla(e){
    let teclas = e.keyCode;

    switch(teclas){
        case esquerda:
            movEsquerda =false;
            break;
        case direita:
            movDireita = false;
            break;
        case cima:
            movCima = false;
            break;
        case baixo:
            movBaixo = false;
            break;

    }
}

function movimenta(){
    if(movEsquerda && !movDireita){
        personagem.posX -= personagem.speed;
    }
    if(movDireita && !movEsquerda){
        personagem.posX += personagem.speed;
    }
    if(movCima && !movBaixo){
        personagem.posY -= personagem.speed;
    }
    if(movBaixo && !movCima){
        personagem.posY += personagem.speed;
    }
    //bloqueando as paredes
    personagem.posX = Math.max(0,personagem.posX);//se posX for menor que 0 ele retorna o 0;
    personagem.posX = Math.max(0,
    Math.min(canvas.width-personagem.width,personagem.posX));//se posX for maior que tamanho do canvas - personagem.width retorna (canvas-p.width);
    personagem.posY = Math.max(0,personagem.posY);
    personagem.posY = Math.min((canvas.height-personagem.height),personagem.posY);
}

function animar(){
    requestAnimationFrame(animar);
    movimenta();
    desenha();
}



function desenha(){
    contexto.clearRect(0,0,canvas.width,canvas.height);
    for(var i in sprites){
        let spr = sprites[i];
        if(spr.visible){
            contexto.fillStyle= spr.color;
            contexto.fillRect(spr.posX,spr.posY,spr.width,spr.height);
        }
    }
}
animar();
}());