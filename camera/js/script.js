let canvas = document.querySelector('canvas');
let contexto = canvas.getContext('2d');

let imagens =[];
//imagens
let jogadorI= new Image();
jogadorI.src='img/monster.png';
let fundo = new Image();
fundo.src='img/scene.png';

//valida movimentação
let movEsquerda=movDireita=movCima=movBaixo=false;

//criando os objetos
let mundo= {
    img:fundo,
    x:0,
    y:0,
    width:800,
    height:600,
}
let personagem={
    img:jogadorI,
    x:0,
    y:0,
    speed:2,
    width:64,
    height:64
}

let cam ={
    x:0,
    y:0,
    width:canvas.width,
    height:canvas.height,
    leftS:function(){
        return this.x+(this.width*0.25)
    },
    rightS:function(){
        return this.x+(this.width*0.75)
    },
    topS:function(){
        return this.y+(this.height*0.25)
    },
    bottomS:function(){
        return this.y+(this.height*0.75)
    }
}

//inserindo os objetos no vetor de imagens
imagens.push(mundo);
imagens.push(personagem);


//centralizar camera
cam.x =(mundo.width-cam.width) /2;
cam.y = (mundo.height-cam.height)/2;

//centralizar jogador

personagem.x = (mundo.width-personagem.width)/2;
personagem.y = (mundo.height-personagem.height)/2;



//////////////////////////////////////////////
///               Movimentação         //////
/////////////////////////////////////////////

window.addEventListener('keydown',function(e){
 let tecla = e.keyCode;

 switch(tecla){
    case 37:
        movEsquerda =true;
        break;
    case 38:
        movCima = true;
        break;
    case 39:
        movDireita=true;
        break;
    case 40:
        movBaixo=true;
 }
})
addEventListener('keyup',(e)=>{
    let tecla = e.keyCode;

    switch(tecla){
       case 37:
           movEsquerda =false;
           break;
       case 38:
           movCima = false;
           break;
       case 39:
           movDireita=false;
           break;
       case 40:
           movBaixo=false;
    }  
})

function movimenta(){
// movimenta o personagem
    if(movEsquerda && !movDireita){
        personagem.x -= personagem.speed;
    }
    if(movDireita && !movEsquerda){
        personagem.x += personagem.speed;
    }
    if(movCima && !movBaixo){
        personagem.y -= personagem.speed;
    }
    if(movBaixo && !movCima){
        personagem.y += personagem.speed;
    }
//limite da camera
if(personagem.x<0){
    personagem.x=0;
}
if(personagem.x+personagem.width>mundo.width){
    personagem.x = mundo.width - personagem.width;
}
if(personagem.y<0){
    personagem.y=0;
}
if(personagem.y+personagem.height>mundo.height){
    personagem.y=mundo.height-personagem.height;
}
//atualizando a camera
if(personagem.x < cam.leftS()){
    cam.x = personagem.x -(cam.width * 0.25);
}
if(personagem.x+personagem.width > cam.rightS()){
    cam.x = personagem.x+personagem.width-(cam.width * 0.75);
}
if(personagem.y < cam.topS()){
    cam.y = personagem.y-(cam.height * 0.25);
}
if(personagem.y+personagem.height> cam.bottomS()){
    cam.y = personagem.y+personagem.height-(cam.height * 0.75);
}
//limite da camera
if(cam.x<0){
    cam.x=0;
}
if(cam.x+cam.width>mundo.width){
    cam.x = mundo.width - cam.width;
}
if(cam.y<0){
    cam.y=0;
}
if(cam.y+cam.height>mundo.height){
    cam.y=mundo.height-cam.height;
}
}
function placar(){
    contexto.font="bold 25px Arial";
    contexto.fillText("Pontuação",10,30);
}

function desenha(){
//percorrendo o laço para desenhar todas as imagens
contexto.save();
contexto.translate(-cam.x,-cam.y);
for(let i in imagens){
    let spr = imagens[i];
    contexto.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
}
contexto.restore();
placar();
}

function animar(){
requestAnimationFrame(animar);
movimenta();
desenha();
}
animar();
