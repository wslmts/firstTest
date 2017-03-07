function Model(name){
    this.name=name;
    this.complete=false;
}
function View(name,options){
    this.root=name;
    this.complete=false;
    this.elements=[];
    this.addbtn=options.addbtn;
}
View.prototype={
    contructor:View,
    render:function(){
        var s=[];
        this.elements.forEach(function(v,i){
           s.push('<li data-index='+i+'>'+ v.name+' <input type="button" class="delete" value="delete"/></li>')
        });
        this.root.innerHTML= s.join("");
        this.removebtn=this.root.querySelectorAll('.delete');
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
        self.view.addItem(document.getElementById('txt').value)
        self.view.addbtn.onclick=function(){
            self.view.addItem(document.getElementById('txt').value)
        }
        self.view.removebtn.forEach(function(v){
            v.onclick=function(e){
                if(e.target.classList.contains('delete')){
                    self.view.removeItem(e.target.parentNode.dataset.index);
                }
            }
        })
    }
}