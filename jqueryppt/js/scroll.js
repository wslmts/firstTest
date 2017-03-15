function scroll(){
    var width=$('li').outerWidth();
    var length=$('li').length;
    $('ul').width(width*length+16);
    for(var i=0;i<length;i++){
        (function(k){
            setTimeout(function(){
                console.log(-width*k)
                $('ul').css('left',-width*k+"px")
            },1000*(k+1));
        })(i);
    }
}
$(function(){
    var timer=setInterval(function(){
        scroll();
     },3000);
});
