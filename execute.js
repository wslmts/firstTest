callback({name:123,say:function(){
    console.log('hello');
    var div=document.createElement('DIV');
    div.innerHTML="<h3>this is a demo</h3>"
    document.body.appendChild(div);
}})
