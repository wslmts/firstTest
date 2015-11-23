//给定一组数中随机去其中几个
function getRandom(array,num){
    var aay=array.sort(function(){
       return  0.5-Math.random();
    });
    if(num<=ary.length){
        return ary.splice(0,num)
    }
}
//例如
var a=[1,2,3,4,5,6,7,8,9,10];
getRandom(a,5);
