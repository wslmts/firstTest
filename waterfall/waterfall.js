var ImageWall={
    loadnum:6,
    init:function(columns){
      var self=this;
      this.columns=columns;
      /*this.colum_height=(function(){
          var a=[];
          for(var i=0;i<columns.length;i++){
              a.push(0);
          }
          return a;
      })();*/
      this.colum_height=[];
      window.onscroll=function(){
          if(Math.min.apply(this,self.colum_height)<document.documentElement.clientHeight+document.body.scrollTop){
              self.add(self.getDataList(1,35));
          }

      }
    },
   add:function(list){
       var self=this;
       for(var i=0;i<list.length;i++){
           var tpl='<div><img src="'+list[i].src+'" /><p>['+list[i].name+']</p></div>';
           $(self.columns[this.getMinCol()]).append(tpl);
       }
   },
   getMinCol:function(){
      var mincol= 0,map={};
      for(var i=0;i<this.columns.length;i++){
          this.colum_height[i]=this.columns[i].offsetHeight;
          map[this.colum_height[i]]=i;
      }
       mincol=Math.min.apply(null,this.colum_height);
       return map[mincol];
   },
    getDataList:function(min,max){
        var imgs=[];
        for(var i=0;i<this.loadnum;i++){
            var num=min+parseInt(Math.random()*(max-min));
            imgs.push({src:'./img/'+num+".jpg",name:num+".jpg"});
        }
       return imgs;
    }
}
window.onload=function(){
    ImageWall.init($('.col'));
    console.log(ImageWall.getMinCol())
}

