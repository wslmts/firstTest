docWidth=screen.availWidth;
gridContainerWidth=0.92*docWidth;
cellSideLength=0.18*docWidth;
cellSpace=0.04*docWidth;

function getPosTop(i,j){
  return cellSpace+i*(cellSideLength+cellSpace);
}
function getPosLeft(i,j){
    return cellSpace+j*(cellSideLength+cellSpace);
}
function getNumColor(num){
   if(num<4){
       return "#776e65"
   }
    return "#fff";
}
function getNumBgColor(num){
  switch (num){
      case 2: return '#eee4da';break;
      case 4: return '#ede0c8';break;
      case 8: return '#f2b179';break;
      case 16: return '#f59563';break;
      case 32: return '#f67c5f';break;
      case 64: return '#f65e3b';break;
      case 128: return '#edcf72';break;
      case 256: return '#edcc61';break;
      case 512: return '#9c0';break;
      case 1024: return '#33b5e5';break;
      case 2048: return '#09c';break;
      case 4096: return '#a6c';break;
      case 8192: return '#93c';break;
  }
    return "black";
}
function nospace(board){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
          if(board[i][j]==0) return false;
        }
    }
    return true;
}
function canmoveleft(board){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
         if(board[i][j]!==0) {
             if (board[i][j - 1] == 0 || board[i][j] == board[i][j - 1]) {
                 return true;
             }
         }
        }
    }
   return false;
}
function canmoveright(board){
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]!==0) {
                if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canmoveup(board){
    for(var j=0;j<4;j++){
      for(var i=1;i<4;i++){
            if(board[i][j]!==0) {
                if (board[i-1][j] == 0 || board[i][j] == board[i-1][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canmovedown(board){
    for(var j=0;j<4;j++){
      for(var i=2;i>=0;i--){
            if(board[i][j]!==0) {
                if (board[i+1][j] == 0 || board[i][j] == board[i+1][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function  noHorizontalBlock(row,col1,col2,board){
    for(var i=col1+1;i<col2;i++){
       if(board[row][i]!==0) return false;
    }
    return true;
}
function  noVerticalBlock(col,row1,row2,board){
    for(var i=row1+1;i<row2;i++){
        if(board[i][col]!==0) return false;
    }
    return true;
}
function nomove(board){
    if(canmoveleft(board)||canmovedown(board)||canmoveright(board)||canmoveup(board)) return false;
    return true;
}