$(function(){
  var data=[
      {name:"1",title:"first picture"},
      {name:"2",title:"second picture"},
      {name:"3",title:"third picture"}
  ];
    var str="";
    var page="";
    $("#main").width(760*data.length);
   for(var i=1;i<=data.length;i++){
       str+='<img src=img/'+i+'.jpg id='+i+'>';
       page+='<a href=#'+i+'>'+i+'</a>'
   }
    $("#main").html(str);
    $(".ctrl").html(page)
});
