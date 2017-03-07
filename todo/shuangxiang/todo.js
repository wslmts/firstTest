/*
 模型用于封装与应用程序的业务逻辑相关的数据以及对数据处理的方法。模型有对数据直接访问的权利。
 模型不依赖 "视图" 和 "控制器", 也就是说 模型它不关心页面如何显示及如何被操作.
 */
function Mode(elems) {
    this._elems = elems;


    this._selectedIndex = -1;


    this.itemAdd = new Event(this);


    this.itemRemoved = new Event(this);

    this.selectedIndexChanged = new Event(this);
}

Mode.prototype = {

    constructor: 'Mode',


    getItems: function(){
        return [].concat(this._elems);
    },

    addItem: function(elem) {
        this._elems.push(elem);
        this.itemAdd.notify({elem:elem});
    },

    removeItem: function(index) {
        var item = this._elems[index];
        this._elems.splice(index,1);
        this.itemRemoved.notify({elem:item});

        if(index === this._selectedIndex) {
            this.setSelectedIndex(-1);
        }
    },
    getSelectedIndex: function(){
        return this._selectedIndex;
    },
    setSelectedIndex: function(index){
        var previousIndex = this._selectedIndex;
        this._selectedIndex = index;
        this.selectedIndexChanged.notify({previous : previousIndex});
    }
};
/*
 下面是观察者模式类,它又叫发布---订阅模式;它定义了对象间的一种一对多的关系，
 让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。
 */
function Event(observer) {
    this._observer = observer;
    this._listeners = [];
}
Event.prototype = {
    constructor: 'Event',
    attach : function(listeners) {
        this._listeners.push(listeners);
    },
    notify: function(objs){
        for(var i = 0;i<this._listeners.length; i++ ) {
            this._listeners[i](this._observer,objs);
        }
    }
};

/*
 * 视图显示模型数据，并触发UI事件。
 */
function View(model,elements){
    this._model = model;
    this._elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);
    var that = this;


    this._model.itemAdd.attach(function(){
        that.rebuildList();
    });
    this._model.itemRemoved.attach(function(){
        that.rebuildList();
    });


    this._elements.list.change(function(e){
        that.listModified.notify({index: e.target.selectedIndex});
    });

    this._elements.addButton.click(function(e){
        that.addButtonClicked.notify();
    });

    this._elements.delButton.click(function(e){
        that.delButtonClicked.notify();
    });
}
View.prototype = {
    constructor:  'View',
    show:  function(){
        this.rebuildList();
    },
    rebuildList: function(){
        var list = this._elements.list,
            items,
            key;
        list.html("");
        items = this._model.getItems();
        for(key in items) {
            if(items.hasOwnProperty(key)) {
                list.append('<li>' +items[key]+ '</li>');
            }
        }
        this._model.setSelectedIndex(-1);
    }
};
/*
 控制器响应用户操作，调用模型上的变化函数
 负责转发请求，对请求进行处理
 */
function Controller(model,view) {
    this._model = model;
    this._view = view;
    var that = this;

    this._view.listModified.attach(function(sender,args){
        that.updateSelected(args.index);
    });
    this._view.addButtonClicked.attach(function(){
        that.addItem();
    });
    this._view.delButtonClicked.attach(function(){
        that.delItem();
    });
}
Controller.prototype = {
    constructor: 'Controller',

    addItem: function(){
        var item = window.prompt('Add item:', '');
        if (item) {
            this._model.addItem(item);
        }
    },

    delItem: function(){
        var index = this._model.getSelectedIndex();
        if(index !== -1) {
            this._model.removeItem(index);
        }
    },

    updateSelected: function(index){
        this._model.setSelectedIndex(index);
    }
};