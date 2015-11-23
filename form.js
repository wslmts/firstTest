var formPlugin={
    init:function(options,root){
        for(var i=0;i<options.length;i++){
            this.show(options[i],root);
        }
        this.bindEvent(root);
    },
    show:function(options,root){
        var  type=options.type,
            element=options.element,
            name=options.name,
            label=options.label;
        var html="";
        switch (element){
            case "input":
                html= '<div><label><%=label%></label> <input type="<%=type%>" name="<%=name%>" value="<%=value%>"/></div>';
                break;
            case "textarea":
                html= '<div><label><%=label%></label> <textarea  name="<%=name%>" ><%=value%></textarea></div>';
                break;
            case "plugin":
                html= '<div><label><%=label%></label> <input type="text" class="<%=type%>plug" id="<%=name%>" name="<%=name%>" value="<%=value%>"/>' +
                    '<input type="hidden" id="<%=name%>1" name="<%=name%>1" value="<%=value%>"/></div>';
                break;
            case "action":
                html= '<div><label><%=label%></label> <input class="cmd" data-cmd="<%=cmd%>" type="<%=type%>" name="<%=name%>" value="<%=value%>"/></div>';
                break;
            default:
                html= '<div><label><%=label%></label> <input type="<%=type%>" name="<%=name%>" value="<%=value%>"/></div>';
        }
        var html=template.compile(html)(options);
        $(root).append(html);
    },
    bindEvent:function(root){
      $(root).delegate(".cmd","click",function(e){
          var cmd=$(e.target).attr("data-cmd");
          $(root).trigger(cmd+"_ready",['a','b']);
      });

        if($(".cityplug",root).length>0){
            initPlugin("city");
        }
        if($(".industryplug",root).length>0){
            initPlugin("industry");
        }
        if($(".functionplug",root).length>0){
            initPlugin("function");
        }

       function initPlugin(type){
           $("."+type+"plug",root).each(function(){
               var name=$(this).attr("name");
               var value=$(this).next().attr("name");
               $.pluckpad( {
                   type: type,
                   $value: $("#"+name),
                   $name:  $("#"+value)
               } );
           });
       }
    }
}
$(function(){
    formPlugin.init([
        {
            type:"text",
            element:"input",
            name:"username",
            label:"用户名",
            value:"hh"
        },
        {
            type:"password",
            element:"input",
            name:"password",
            label:"密码",
            value:"123"
        },
        {
            element: "textarea",
            name: "comment",
            label: "评论",
            value: "hello,welcome"
        },
        {
            type:"city",
            element:"plugin",
            name:"city",
            label:"城市",
            value:"",
            max:3
        },
        {
            type:"city",
            element:"plugin",
            name:"city2",
            label:"家乡",
            value:"",
            max:3
        },
        {
            type:"function",
            element:"plugin",
            name:"function1",
            label:"职类",
            value:"",
            max:1
        },
        {   type:"submit",
            element:"action",
            name:"submit",
            cmd:"submit",
            value:"提交"
        }
    ],$(".content")[1]);
    $(".content").bind("submit_ready",function(e){
        alert('execute action');
    });

});