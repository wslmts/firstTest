/*function alphabetPosition(text) {
 var words={
 a:1, b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,
 o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
 }
 var ay= text.toLowerCase().split("");
 var nums=[];
 ay.forEach(function(v,i){
 var p=/[a-z]/ig;
 if(p.test(v)){
 nums.push(words[v])
 }
 });
 return nums.join(" ");
 }
 alphabetPosition("The sunset sets at twelve o' clock.")
 */


/*
 function validatePIN (pin) {
 var p=/^\d{4}$|^\d{6}$/g;
 return p.test(pin)
 }
 validatePIN("12345")*/
/*function XO(str) {
    str=str.toLowerCase();
    var p=/(x|o)/g;
    var x=[],o=[];
    var r=null;
    while((r=p.exec(str))!=null){
        console.log(r)
       if(r[1]=="x"){
           x.push(r[1])
       }else if(r[1]=="o"){
            o.push(r[1])
        }
    }
    console.log(x,o)
    return x.length=== o.length;
}
XO("ooxXm")*/
/*
function findShort(s){
    var list= s.split(/\s+/);
    if(list.length>1){
        list.sort(function(a,b){
          if(a.length> b.length) return 1;
          if(a.length<= b.length) return -1;
        });

    }
    return list[0].length;
}
findShort("bitcoin take over the world maybe who knows perhaps")*/
/*
function findNextSquare(sq) {
    var n=Math.sqrt(Number(sq));
    if(Number.isInteger(n)){
        return Math.pow(n+1,2);
    }
    return -1;
}
findNextSquare(121)*/
function array_diff(a, b) {
    var c=[];
    a.forEach(function(v){
        if(!b.includes(v)){
            c.push(v)
        }
    });
    return c;
}
array_diff([1,2],[1]) == [2]