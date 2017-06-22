$(function(){
    School.init();
});
var School={
    init:function(){
       this.filterCondition={};
       this.renderTitle();
       this.renderLetter();
      // this.renderContent({data:college_type_dic.typelist});
       this.bindEvent();
    },
    renderTitle:function(){
        var data={
            type:['province','level','type'],
            list:[{'province':'地区'},{'level':'等级'},{'type':'类型'}]
        };
        var tpl= [
            '<%for(var i=0;i<type.length;i++){%>',
            '<li  class="level1" data-type="<%=type[i]%>"><label><%=list[i][type[i]]%></label><div class="list"></div></li>',
            '<%}%>'
        ].join("");
       $("#title").html(template.compile(tpl)(data))
    },
    renderLetter:function(){
        var letters=[];
        for(var i=65;i<=90;i++){
            letters.push('<a>'+String.fromCharCode(i)+'</a>');
        }
        $("#alphabet").html(letters.join(""));
    },
    renderContent:function(data){
      var tpl= [
          '<%for(var i=0;i<data.length;i++){%>',
        '<li data-id="<%=data[i].id%>"><label><input type="checkbox" name="school"/><%=data[i].name%></label></li>',
          '<%}%>'
      ].join("");
      $("#wrap_school").html(template.compile(tpl)(data));
    },
    showConditionList:function(target){
        var self=this;
        var list=target.find('.list');
        if(list.is(":empty")){
            self.renderConditionList(list,target.data('type'));
        }
        list.show();
    },
    renderConditionList:function(root,type){
        var self=this;
        var list= {data:window["college_"+type+"_dic"][type+"list"]};
        var tpl= [' <ul>',
            '<%for(var i=0;i<data.length;i++){%>',
            '<li data-id="<%=data[i].id%>" data-name="<%=data[i].name%>" class="level2"><label><%=data[i].name%></label></li>',
            '<%}%>',
       ' </ul>' ].join("");
        root.html(template.compile(tpl)(list));
    },
    filterSchool:function(target,type){
        var self=this;
        if(type&&type=='firstLetter'){
            self.filterCondition['firstLetter']=target.text();
        }else{
            var top=target.closest('.level1');
            var type=top.data("type"),id=target.data('id');
            if(type=='province'){
                self.filterCondition[type]=id;
            }else{
                self.filterCondition[type]=target.data('name');
            }
        }
        var all=window["college_dic_json"].universitylist;
        var list=[];
        for(var i=0;i<all.length;i++){
           if(self.filterItem(all[i])){
               list.push(all[i])
           }
        }
        self.renderContent({data:list})
    },
    filterItem:function(obj){
       if(this.filterCondition.province&&this.filterCondition.province!=obj.province.id){
           return false;
       }
        if(this.filterCondition.level&&this.filterCondition.level!=obj.level){
            return false;
        }
        if(this.filterCondition.type&&this.filterCondition.type!=obj.type){
            return false;
        }
        if(this.filterCondition.firstLetter&&this.filterCondition.firstLetter!=obj.firstLetter){
            return false;
        }
        return true;
    },
    bindEvent:function(){
        var self=this;
         $(".title .level1").click(function(){
              if($(this).find('.list').is(":visible")){
                  $(this).find('.list').hide();
              }else{
                  self.showConditionList($(this));
              }
         });
        $(".title .level1").on('click','.level2',function(e){
            self.filterSchool($(this));
        });
        $("#alphabet a").click(function(){
            self.filterSchool($(this),'firstLetter');
        });
    }
}
