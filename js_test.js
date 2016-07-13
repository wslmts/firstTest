function Foo(){
  getName=function(){alert(1)}
  return this; 
}
Foo.getName=function(){alert(2)}
Foo.prototype.getName=function(){alert(3)}
var getName=function(){alert(4)}
function getName(){alert(5)}
console.log(Foo())

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
//2,4,1,1,2,3,3
/*
var o=(function(){
    var n=0;
    return function(){
        console.log(n+=1);
    }
}());
var a1=new o();
var a2=new o();
var a3=new o();*/
function vb(){
    var n=0
    console.log(n+=1);
    console.log(this)
}
var a1=new vb();

function A(name){
    this.name=name;
}
A.prototype.say=function(){
    return this.name;
}
function B(name){
    A.apply(this,arguments)
}
console.log(B.prototype)
B.prototype= A.prototype;
console.log(B.prototype)
var b=new B("abc");
b.say();

var p=document.createElement('p');
var txt=document.createTextNode('welcome  to bj');
var f=document.createDocumentFragment();
p.appendChild(txt);
console.log(f.hasChildNodes())
f.appendChild(p);
console.log(f.hasChildNodes())

    [1,2,3].forEach(function(v,i){
        console.log(i,"---",v);
        //0---1
    });
(function (){
   var a=1;
    try{a();}catch(e){
       console.log( e instanceof Error);
    }
    console.log("here");
    //try js出错后仍可继续执行，否则不会；
}());
var a=[1,2,3];
var b=a.forEach(function(v){
        return v<3;
    });
console.log(a,b);
function a(){
    console.log(this.hello=="world");
}
var b=a.bind({hello:"world"});
b();
var c=a.call({hello:"world"});
//call 或者apply会直接执行函数，bind只是改变this引用，不会执行