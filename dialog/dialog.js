$.fn.default={
    width:300,
    height:300,
    title:"welcome",
    mask:true,
    bottom:"",
    sure_btn:"",
    cancle_btn:"",
    sure_btn_txt:"确定",
    cancle_btn_txt:"取消"
}
function Dialog(message,options){
    this.setting= $.extend({},$.fn.default,options||{});
    this.init(message);
}
Dialog.prototype={
    constructor:Dialog,
    init:function(message){
        var self=this;
        var tpl= self.getTpl();
        var html=template.compile(tpl)(self.setting);
        self.dialog=$(html).appendTo("body");
        self.show(message);
    },
    show:function(message){
        var self=this;
        self.dialog.find(".dialog_body").html(message);
        self.bindEvent();
    },
    bindEvent:function(){
        var self=this;
        self.dialog.on('click','.sure_btn',function(){
            console.log("sure",$(this).text())
        });
        self.dialog.on('click','.cancle_btn',function(){
            self.close();
        });
    },
    getTpl:function(){
        return [
            '<div class="dialog_wrap <%=customCss%>" style="min-width:<%= width %>px; z-index:99999;">',
            '  <div class="dialog_header"><%=title%></div>',
            '  <div class="dialog_body"></div>',
            '  <div class="dialog_footer <%=bottom%>">' +
            ' <button class="sure_btn <%=sure_btn%>" type="button"><%=sure_btn_txt%></button>',
            ' <button class="cancle_btn <%=cancle_btn%>" type="button"><%=cancle_btn_txt%></button>',
            '</div>',
            '</div>'
        ].join("");
    },
    close:function(){
        var self=this;
        self.dialog.remove();
        console.log(self.dialog)
    }
}

Dialog1={
    init:function(message,options){
        var self=this;
        self.setting= $.extend($.fn.default,options||{});
        var tpl= self.getTpl();
        var html=template.compile(tpl)(self.setting);
        self.dialog=$(html).appendTo("body");
        self.show(message);
    },
    show:function(message){
        var self=this;
        self.dialog.find(".dialog_body").html(message);
        self.bindEvent();
    },
    bindEvent:function(){
        var self=this;
        self.dialog.on('click','.sure_btn',function(){
            console.log("sure",$(this).text())
        });
        self.dialog.on('click','.cancle_btn',function(){
           self.close();
        });
    },
    getTpl:function(){
        return [
            '<div class="dialog_wrap <%=customCss%>" style="min-width:<%= width %>px; z-index:99999;">',
            '  <div class="dialog_header"><%=title%></div>',
            '  <div class="dialog_body"></div>',
            '  <div class="dialog_footer <%=bottom%>">' +
            ' <button class="sure_btn <%=sure_btn%>" type="button"><%=sure_btn_txt%></button>',
            ' <button class="cancle_btn <%=cancle_btn%>" type="button"><%=cancle_btn_txt%></button>',
            '</div>',
            '</div>'
        ].join("");
    },
    close:function(){
        var self=this;
        self.dialog.remove();
        console.log(self.dialog)
    }
}