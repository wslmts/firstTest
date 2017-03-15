;(function($){
    $.scroll=function(){
        var root=$('ul'),list=root.find('li'),index=0;
        var width=list.first().outerWidth();
        var length=list.length; var order_by = 'ASC';
        root.width(width*length+16);
        list.first().addClass('active');
        var timer=null;
        function start(){
            index=$(".active").index(); var active = root.find('li.active')
            var offset=-index*width;
            root.css('left',offset+"px");
            $('.active').removeClass('active');
            if(order_by=='ASC'){
                if (active.next().length){
                    active.next().addClass('active');
                }else{
                    order_by = 'DESC';
                    active.prev().addClass('active');
                }
            }else if(order_by=='DESC'){
                if (active.prev().length){
                    active.prev().addClass('active');
                }else{
                    order_by = 'ASC';
                    active.next().addClass('active');
                }
            }
            timer=setTimeout(function(){start()},1000);
        }
        function stop(){
          clearTimeout(timer);
        }
        start();
        root.hover(function(){
            stop();
        },function(){
            start();
        })
    }
})($);
$(function(){
    $.scroll();
});