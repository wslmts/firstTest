function  showNumWithAnimate(i,j,randNum){
    var numcell=$("#number-cell-"+i+"-"+j);
    numcell.css({color:getNumColor(board[i][j]),backgroundColor:getNumBgColor(board[i][j])});
    numcell.text(randNum);
    numcell.animate({
        width:"100px",height:"100px",left:getPosLeft(i,j),top:getPosTop(i,j)
    },50)
}
function showNumAnimate(fromx,fromy,tox,toy){
    var numcell=$("#number-cell-"+fromx+"-"+fromy);
    console.log("#number-cell-"+fromx+"-"+fromy+": "+numcell.text())
    numcell.animate({
       left:getPosLeft(tox,toy),top:getPosTop(tox,toy)
    },100);
    console.log("#number-cell-"+tox+"-"+toy+": "+numcell.text())
}