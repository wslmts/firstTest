var IEPlaceholder={
    init:function(){
      if(!'placeholder' in document.createElement('input')){
         $('input:text[placeholder]').each(function(i,v){
            var txt=$(this).attr('placeholder');
            var pos = $(this).position();
             var w=$(this).width();
            $('<span class="ie_place">'+txt+'</span>').css({
                left:pos.left,top:pos.top+2
            }).insertAfter($(this));
         });
        this._bindEvent();
     }
    },
    _bindEvent:function(){
        $(".ie_place").bind("click",function(){
            $(this).hide();
            $(this).prev('input').focus();
        });
        var input=$('input:text[placeholder]');
        input.bind("blur",function(){
            if($.trim($(this).val())==""){
                $(".ie_place").show();
            }
        });
        input.bind("focus",function(){
            $(this).next(".ie_place").hide();
        });
    }
}
var IEPlaceholder2={
    init:function(){
        // if(!'placeholder' in document.createElement('input')){
        $('input:text[placeholder]').each(function(i,v){
            var txt=$(this).attr('placeholder');
            if($(this).val()==""){
              $(this).val(txt);
            }
        });
        this._bindEvent();
        // }
    },
    _bindEvent:function(){
        var self=this;
        var input=$('input:text[placeholder]');
        input.bind("click",function(){
            var txt=$(this).attr('placeholder');
            if($(this).val()==txt){
                $(this).val("");
            }
        });
        input.bind("blur",function(){
            var txt=$(this).attr('placeholder');
            if($.trim($(this).val())==""){
                $(this).val(txt);
            }
        });
    }
}