function  showNumWithAnimate(i,j,randNum){
    var numcell=$("#number-cell-"+i+"-"+j);
    numcell.css({color:getNumColor(board[i][j]),backgroundColor:getNumBgColor(board[i][j])});
    numcell.text(randNum);
    numcell.animate({
        width:cellSideLength,height:cellSideLength,left:getPosLeft(i,j),top:getPosTop(i,j)
    },50)
}
function showNumAnimate(fromx,fromy,tox,toy){
    var numcell=$("#number-cell-"+fromx+"-"+fromy);
    numcell.animate({
       left:getPosLeft(tox,toy),top:getPosTop(tox,toy)
    },100)
}