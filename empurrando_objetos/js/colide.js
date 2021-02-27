function blocoRect(r1,r2){
    //r1 === bloqueando
    //r2 === parede
    //catetos
    let catX = r1.centerX() - r2.centerX();
    let catY = r1.centerY() - r2.centerY();

    //soma das metades
    let somaML= r1.halfWidth()+r2.halfWidth();
    let somaMA= r1.halfHeight()+r2.halfHeight();

    if(Math.abs(catX)<somaML && Math.abs(catY)<somaMA){
        let overlapX= somaML -Math.abs(catX);
        let overlapY=somaMA - Math.abs(catY);

        if(overlapX >= overlapY){//colisao por cima ou por baixo
            if(catY >0){//colisao por cima
                r1.posY += overlapY;
            }else{//colisao por baixo
                r1.posY -= overlapY;
            }
        }else{//colisao pela esquerda ou direita
            if(catX>0){//colisao pela esquerda
                r1.posX += overlapX;
            }else{//colisao pela direita
                r1.posX -= overlapX;
            }
        }
    }
}