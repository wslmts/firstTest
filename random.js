//����һ���������ȥ���м���
function getRandom(array,num){
    var aay=array.sort(function(){
       return  0.5-Math.random();
    });
    if(num<=ary.length){
        return ary.splice(0,num)
    }
}
//����
var a=[1,2,3,4,5,6,7,8,9,10];
getRandom(a,5);
