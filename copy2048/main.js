var board=[];
var score=0;
var hasconflict=[];
$(function(){
    newgame();
})
function newgame(){
  //初始化棋盘格
    init();
    //随机选2格生成数字
    generateOneNumber();
    generateOneNumber();
}
function init(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridcell=$("#grid-cell-"+i+"-"+j);
            gridcell.css("top",getPosTop(i,j));
            gridcell.css("left",getPosLeft(i,j));
        }
    }
    for(var i=0;i<4;i++){
        board[i] = [];
        hasconflict[i]=[];
        for(var j=0;j<4;j++){
            board[i][j] = 0;
            hasconflict[i][j]=false;
        }
    }
    updateBoardView();
    score=0;
}
function  updateBoardView(){
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
           $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
           var numcell=$("#number-cell-"+i+"-"+j);
            if(board[i][j]==0){
                numcell.css({width:0,height:0,left:getPosLeft(i,j)+50,top:getPosTop(i,j)+50})
            }else{
                numcell.css({width:"100px",height:"100px",left:getPosLeft(),top:getPosTop(),color:getNumColor(board[i][j]),backgroundColor:getNumBgColor(board[i][j])});
                numcell.text(board[i][j]);
            }
            hasconflict[i][j]=false;
        }
    }
}
function generateOneNumber(){
  if(nospace(board)) return false;
    //随机选一个位置
     var x=parseInt(Math.floor(Math.random()*4));
     var y=parseInt(Math.floor(Math.random()*4));
  /*  while(true){
        if(board[x][y]==0) break;
        x=parseInt(Math.floor(Math.random()*4));
        y=parseInt(Math.floor(Math.random()*4));
    }*/
    //随机位置--优化方法
    var timmer=0;
    while(timmer<50){
        if(board[x][y]==0) break;
        x=parseInt(Math.floor(Math.random()*4));
        y=parseInt(Math.floor(Math.random()*4));
        timmer++;
    }
    if(timmer==50){
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                if(board[i][j]==0){
                    x=i;y=j;
                    break;
                }
            }
        }
    }
    //随机一个数字
    var randNum=Math.random()<0.5?2:4;
    //随机位置显示随机数字
    board[x][y]=randNum;
    showNumWithAnimate(x,y,randNum);
    return true;
}
$(document).on('keydown',function(e){
    switch (e.keyCode){
        case 37:
            if(moveleft()){
                setTimeout(generateOneNumber,210);
                setTimeout(isgameover,300);
            }
            break;
        case 38:
            if(moveup()){
                setTimeout(generateOneNumber,210);
                setTimeout(isgameover,300);
            }
            break;
        case 39:
            if(moveright()){
                setTimeout(generateOneNumber,210);
                setTimeout(isgameover,300);
            }
            break;
        case 40:
            if(movedown()){
                setTimeout(generateOneNumber,210);
                setTimeout(isgameover,300);
            }
            break;
        default:
            break;
    }
});
function moveleft(){
  if(!canmoveleft(board)) return false;
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
                for(var k=0;k<j;k++){
                    if(board[i][k]==0&&noHorizontalBlock(i,k,j,board)){
                        showNumAnimate(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }else  if(board[i][j]==board[i][k]&&noHorizontalBlock(i,k,j,board)&&!hasconflict[i][k]){
                        showNumAnimate(i,j,i,k);
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        //add score
                        score+=board[i][k];
                        updateScore(score);
                        hasconflict[i][k]=true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updateBoardView,200);
    return true;
}
function moveright(){
    if(!canmoveright(board)) return false;
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]!=0){
                for(var k=3;k>j;k--){
                    if(board[i][k]==0&&noHorizontalBlock(i,j,k,board)){
                        showNumAnimate(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }else  if(board[i][j]==board[i][k]&&noHorizontalBlock(i,j,k,board)&&!hasconflict[i][k]){
                        showNumAnimate(i,j,i,k);
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        //add score
                        score+=board[i][k];
                        updateScore(score);
                        hasconflict[i][k]=true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updateBoardView,200);
    return true;
}
function moveup(){
    if(!canmoveup(board)) return false;
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(board[i][j]!=0){
                for(var k=0;k<i;k++){
                    if(board[k][j]==0&&noVerticalBlock(j,k,i,board)){
                        showNumAnimate(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }else if(board[i][j]==board[k][j]&&noVerticalBlock(j,k,i,board)&&!hasconflict[k][j]){
                        showNumAnimate(i,j, k,j);
                        board[k][j]+=board[i][j];
                        board[i][j]=0;
                        //add score
                        score+=board[k][j];
                        updateScore(score);
                        hasconflict[k][j]=true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updateBoardView,200);
    return true;
}
function movedown(){
    if(!canmovedown(board)) return false;
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(board[i][j]!=0){
                for(var k=3;k>i;k--){
                    if(board[k][j]==0&&noVerticalBlock(j,i,k,board)){
                        showNumAnimate(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }else  if(board[i][j]==board[k][j]&&noVerticalBlock(j,i,k,board)&&!hasconflict[k][j]){
                        showNumAnimate(i,j, k,j);
                        board[k][j]+=board[i][j];
                        board[i][j]=0;
                        //add score
                        score+=board[k][j];
                        updateScore(score);
                        hasconflict[k][j]=true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updateBoardView,200);
    return true;
}
function  isgameover(){
   if(nospace(board)&&nomove(board)){
       gameover();
   }
}
function gameover(){
  alert('game over');
}
function updateScore(score){
    $("#score").text(score);
}