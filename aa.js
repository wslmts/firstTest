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
function findOutlier(integers){
    var odd=[],even=[];
    for(var i=0;i<integers.length;i++){
        integers[i]%2===0?even.push(integers[i]):odd.push(integers[i]);
    }
    if(even.length===1) return Number(even.toString());
    if(odd.length===1) return Number(odd.toString());
}