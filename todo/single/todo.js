function Model(name){
    this.name=name;
    this.complete=false;
}
function View(name){
    this.root=name;
    this.complete=false;
}
View.prototype={
    contructor:View,
    elements:[],
    render:function(){
        var s=[];
        this.elements.forEach(function(v,i){
           s.push('<li data-index='+i+'>'+ v.name+' <input type="button" class="delete" value="delete"/></li>')
        });
        this.root.innerHTML= s.join("");
    },
    addItem:function(name){
        this.elements.push(new Model(name));
        this.render();
    },
    removeItem:function(i){
        this.elements.splice(i,1);
        this.render();
    }
}
function Controller(view){
    this.view=view;
}
Controller.prototype={
    contructor:Controller,
    event:function(){
        var self=this;
        document.getElementById('add').onclick=function(){
            self.view.addItem(document.getElementById('txt').value)
        }
        document.onclick=function(e){
            if(e.target.classList.contains('delete')){
                self.view.removeItem(e.target.parentNode.dataset.index);
            }
        }
    }
}