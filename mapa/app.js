
let canvas = document.querySelector('canvas');
let contexto = canvas.getContext("2d");
let mapa = new Image();
mapa.src='./img/mapaGta5.jpg';
let posX =0;
let posY =0;
let width =1800;
let height = 2400;
let tamanho=400;
let cima =38,baixo=40,esquerda=37,direita=39,pgUp=33,pgDw=34;
let mCima,mBaixo,mEsquerda,mDireita,mpgUp,mpgDw = false;

function controles(){
addEventListener('keydown',teclaPressionada);
addEventListener('keyup',teclaLevantada);
limiteDaTela();
    if(mBaixo)
    {
        posY-=5;
    }
    if(mCima)
    {
        posY+=5;
    }
    if(mDireita)
    {
        posX-=5;
    }
    if(mEsquerda)
    {
        posX+=5;
    }
    if(mpgUp)
    {
        
    }
    if(mpgDw)
    {
        
    }
}
function limiteDaTela(){
    if(posX>=0){
        mEsquerda=false;
    }
    if(posY<=-2225){
        mBaixo = false;
    }
    if(posY>=+0){
        mCima = false;
    }
    if(posX<-1450){
        mDireita =false;
    }
}
function teclaPressionada(e){
    let tecla =e.keyCode;

    switch(tecla){

    case cima:
        mCima = true;
        break;
    case baixo:
        mBaixo = true;
        break;
    case esquerda:
        mEsquerda = true;
        break;
    case direita:
        mDireita = true;
        break;
    case pgUp:
        mpgUp=true;
        break;
    case pgDw:
        mpgDw = true;
        break;
    }
}

const teclaLevantada =(e)=>{
    let tecla =e.keyCode;

    switch(tecla){

    case cima:
        mCima = false;
        break;
    case baixo:
        mBaixo = false;
        break;
    case esquerda:
        mEsquerda = false;
        break;
    case direita:
        mDireita = false;
        break;
    case pgUp:
        mpgUp=false;
        break;
    case pgDw:
        mpgDw = false;
        break;
    
}
}
function atualiza(){
    controles();
    desenha();
}

function desenha(){
    contexto.drawImage(mapa,0,0,width,height,posX,posY,width,height);
}


function animar(){


atualiza();
requestAnimationFrame(animar);
}
mapa.onload=animar();