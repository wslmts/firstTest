function getposition(node){
      var left=node.offsetLeft;
    var top=node.offsetTop;
    var parent=node.offsetParent;
   if(parent!=null){
       left+=parent.offsetLeft;
       top+=parent.offsetTop;
       parent=parent.offsetParent;
   }
    return {left:left,top:top};
}
window.onload=function(){
    var maindiv=document.getElementById('main');
    var rc=maindiv.getElementsByClassName('rc')[0];
    var tc=maindiv.getElementsByClassName('tc')[0];
    var lc=maindiv.getElementsByClassName('lc')[0];
    var bc=maindiv.getElementsByClassName('cb')[0];
    var lt=maindiv.getElementsByClassName('lt')[0];
    var rt=maindiv.getElementsByClassName('tr')[0];
    var lb=maindiv.getElementsByClassName('lb')[0];
    var rb=maindiv.getElementsByClassName('rb')[0];
    var iskeydown=false;
    var contact="";
    rc.onmousedown=function(e){
        iskeydown=true;
        contact="right";
    }
    tc.onmousedown=function(e){
        iskeydown=true;
        contact="up";
    }
    lc.onmousedown=function(e){
        iskeydown=true;
        contact="left";
    }
    bc.onmousedown=function(e){
        iskeydown=true;
        contact="down";
    }
    lt.onmousedown=function(e){
        iskeydown=true;
        contact="leftup";
    }
    rt.onmousedown=function(e){
        iskeydown=true;
        contact="rightup";
    }
    lb.onmousedown=function(e){
        iskeydown=true;
        contact="leftbottom";
    }
    rb.onmousedown=function(e){
        iskeydown=true;
        contact="rightbottom";
    }
    document.onselecstart=function(e1){
        e1.preventDefault();
    }
    window.onmousemove=function(e){
       if(iskeydown){
           switch (contact){
               case 'right':
                   right(e);
                   break;
               case 'left':
                   left(e);
                   break;
               case 'up':
                   up(e);
                   break;
               case 'down':
                   down(e)
                   break;
               case 'leftup':
                   left(e);
                   up(e);
                   break;
               case 'rightup':
                   right(e);
                   up(e);
                   break;
               case 'leftbottom':
                   left(e);
                   down(e);
                   break;
               case 'rightbottom':
                   right(e);
                   down(e);
                   break;

           }
           setChoice();
           preview()
       }
    }
    function up(e){
        var y= e.clientY;
        var mainY=getposition(maindiv).top;
        var addheight=mainY-y;
        var heightbefore=maindiv.offsetHeight-2;
        maindiv.style.height=addheight+heightbefore+'px';
        maindiv.style.top=maindiv.offsetTop-addheight+'px';
    }
    function down(e){
        var y= e.clientY;
        var mainY=getposition(maindiv).top;
        var heightbefore=maindiv.offsetHeight-2;
        var addheight=y-heightbefore-mainY;
        maindiv.style.height=addheight+heightbefore+'px';
    }
    function left(e){
        var x= e.clientX;
        var mainX=getposition(maindiv).left;
        var widthbefore=maindiv.offsetWidth-2;
        var addWidth=mainX-x;//鼠标移动增加的宽度；
        maindiv.style.width=addWidth+widthbefore+'px';
        maindiv.style.left=maindiv.offsetLeft-addWidth+'px';
    }
    function right(e){
        var x= e.clientX;
        var widthbefore=maindiv.offsetWidth-2;
        var addWidth=x-getposition(maindiv).left-widthbefore;//鼠标移动增加的宽度；
        maindiv.style.width=addWidth+widthbefore+'px';
    }
    window.onmouseup=function(e){
        iskeydown=false;
        contact="";
    }
    function setChoice(){
        var top=maindiv.offsetTop;
        var left=maindiv.offsetLeft;
        var right=maindiv.offsetWidth+left;
        var bottom=top+maindiv.offsetHeight;
        var img2=document.getElementById('img2');
        img2.style.clip='rect('+top+'px,'+right+'px,'+bottom+'px,'+left+')';
    }
    function preview(){
        var top=maindiv.offsetTop;
        var left=maindiv.offsetLeft;
        var right=maindiv.offsetWidth+left;
        var bottom=top+maindiv.offsetHeight;
        var img3=document.getElementById('img3');
        img3.style.clip='rect('+top+'px,'+right+'px,'+bottom+'px,'+left+')';
        img3.style.top=-top+"px";
        img3.style.left=-left+"px";
    }
}