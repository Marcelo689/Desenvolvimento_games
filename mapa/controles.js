let cima =38,baixo=40,esquerda=37,direita=39;
let mCima,mBaixo,mEsquerda,mDireita = false;

function controles(){
    addEventListener('keydown',teclaPressionada);

    if(mCima)
    {
        posY--;
    }
    if(mBaixo)
    {
        posY++;
    }
    if(mEsquerda)
    {
        posX--;
    }
    if(mDireita)
    {
        posX++;
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
    
}
}