function controles(){
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


}