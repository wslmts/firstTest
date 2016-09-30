var total=6;
var win=$(window);
var img=$("#largeimg");
var render=function(){
    var padding=2;
    var winwidth=win.width();
    var picWidth=Math.floor((winwidth-padding*3)/4);
    var tpl="";
    for(var i=1;i<=total;i++){
        //tpl+=' <li style="padding:'+padding+'px"><img src="img/'+i+'.jpg" style="width:'+picWidth+'px;height:'+picWidth+'px"/></li>';
        tpl+=' <li data-id="'+i+'" class="animated bounceIn" style="padding-right:'+padding+'px;width:'+picWidth+'px;height:'+picWidth+'px"><canvas id="cvs'+i+'"></canvas></li>';
        (function(){
            var imgobj=new Image();
            imgobj.src="img/"+i+".jpg";
            imgobj.index=i;
            imgobj.onload=function(){
                var cvs=$("#cvs"+this.index)[0];
                cvs.width=imgobj.width;
                cvs.height=imgobj.height;
                var ctx=cvs.getContext('2d');
                ctx.drawImage(imgobj,0,0,100,100)
            }
        })(i);
    }
    $("#container").html(tpl);
}
function loadImg(id,callback){
    var ww=win.width();
    var wh=win.height();

    $("#large").css({width:ww,height:wh}).show();
    var imgobj=new Image();
    var src="img/"+id+"-large.jpg";
    imgobj.src=src;
    imgobj.onload=function(){
       var w=this.width;
       var  h=this.height;
        var realw=wh*w/h;
        var pl=parseInt((ww-realw)/2);
        var realh=ww*h/w;
        var pt=parseInt((wh-realh)/2);
        img.css({'width':'auto',height:'auto'})
        if(h/w>1.2){
            img.attr('src',src).css({'padding-left':pl,height:wh})
        }else{
            img.attr('src',src).css({'padding-top':pt,width:ww})
        }
    }
    callback&&callback();
}
$(function(){
    var cid="";
    render();
    $("#container").on('tap','li',function(){
      var id=cid=$(this).data("id");
        loadImg(id);
    });
    $("#large").tap(function(){
       $(this).hide();
    }).swipeLeft(function(){
        cid++;
        cid>total?cid=total:loadImg(cid,function(){
            img.addClass('animated bounceRight');
        });
    }).swipeRight(function(){
        cid--;
        cid<1?cid=1:loadImg(cid,function(){
            img.addClass('animated bounceLeft');
        });
    });
});
