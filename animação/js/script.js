window.onload = function(){
    let esquerda =37, cima=38 , direita =39 ,baixo=40;
    let canvas = document.querySelector('canvas');
    let contexto = canvas.getContext("2d");
    let spriteSheet = new Image();
    spriteSheet.src = "img/img.png";
    let personagem = new Sprite(spriteSheet);
    let mapa = new Image();
    mapa.src ='img/scene.png';
    let width,height;

    function controlesDown(e){
        let tecla = e.keyCode;

        switch(tecla){
            case esquerda:
            
            personagem.movCima=false
            personagem.movBaixo= false;
            personagem.movEsquerda = true;
            personagem.movDireita = false;
            
            break;
        case direita:
            personagem.movCima=false
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = true;
            break;
        case cima:
            personagem.movCima=true;
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        case baixo: 
            personagem.movCima=false;
            personagem.movBaixo= true;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        }
    }
    function controlesUp(e){
        let tecla = e.keyCode;

        switch(tecla){
            case esquerda:
            personagem.movCima=false
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        case direita:
            personagem.movCima=false
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        case cima:
            personagem.movCima=false;
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        case baixo:
            personagem.movCima=false;
            personagem.movBaixo= false;
            personagem.movEsquerda = false;
            personagem.movDireita = false;
            break;
        }
    }


    spriteSheet.onload = function(){
        animar();
    }

    function mapas(){
        contexto.drawImage(mapa,0,0,mapa.width,mapa.height,0,0,canvas.width,canvas.height);
    }

    function desenha(){
        personagem.andar();
        personagem.animacao();
        personagem.draw(contexto);
        
    }


    function animar(){

    width = canvas.width = document.documentElement.clientWidth;
    height = canvas.height= document.documentElement.clientHeight;

    addEventListener("keydown",controlesDown);
    addEventListener("keyup",controlesUp);
    window.requestAnimationFrame(animar);
    mapas();
    desenha();
    }
}