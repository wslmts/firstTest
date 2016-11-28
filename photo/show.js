var ImageView={
    currentGroup:1,
    groupSize:4,
    show:function(){
        this.renderSmall(1);
        this.bindEvent();
    },
    renderSmall:function(group){
        var source=this.getSource();
        var tpl='';
        var start = (group-1)*this.groupSize;
        var end = group*this.groupSize;
        for(var i=start;i<end&&i<source.length;i++){
           tpl+='<li><img src="img/'+source[i][1]+'"/></li>';
        }
        document.getElementById('list').innerHTML=tpl;
    },
    bindEvent:function(){
        var self=this;
        var source=this.getSource();
      $("#prve").click(function(){
          if(self.currentGroup-1>0){
              self.renderSmall(--self.currentGroup);
          }
      });
      $("#next").click(function(){
          if(self.currentGroup+1<=Math.ceil(source.length/self.groupSize)){
              self.renderSmall(++self.currentGroup);
          }
      });
        $("#list").on('click','li',function(){
            $("#bigimg").attr('src',$(this).find("img").attr('src').replace('thumb','photo'))
        });
    },
    getSource:function(){
        return  [
            ["photo01.jpg","thumb01.jpg"]
            ,["photo02.jpg","thumb02.jpg"]
            ,["photo03.jpg","thumb03.jpg"]
            ,["photo04.jpg","thumb04.jpg"]
            ,["photo05.jpg","thumb05.jpg"]
            ,["photo06.jpg","thumb06.jpg"]
            ,["photo07.jpg","thumb07.jpg"]
        ];
    }
}
window.onload=function(){
    ImageView.show();
    //键盘事件测试
    document.onkeyup=function(e){
        console.log('keyup ', e)
    }
    document.onkeydown=function(e){
        console.log('keydown ', e)
    }
    document.onkeypress=function(e){
        console.log('keypress ', e)
    }

}
