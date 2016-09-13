function drawCalandar(syear,smonth){
    var newDate;
    if(arguments[0]==null||arguments[1]==null){
        newDate=new Date();
    }else{
        newDate=new Date(syear,smonth-1);
    }
    var dateyear=newDate.getFullYear();
    var datemonth=newDate.getMonth()+1;
    var datetoday=newDate.getDate();
    var dateday=newDate.getDay();

    var nextmonth=datemonth+1;
    var nextyear=dateyear;
    var prevmonth=datemonth-1;
    var prevyear=dateyear;
    if(smonth==12){nextmonth=1;nextyear=dateyear+1;}
    if(smonth==1){prevmonth=12;prevyear=dateyear-1;}
    var ctable="";
    var ctablehead = ['<table width="150" border="0" cellpadding="0" cellspacing="1" style="background: #06f;text-align: center">',
        '<tr style="background: #399"><td onclick="drawCalandar(',prevyear,',',prevmonth,')" style="cursor:pointer;background: #f60">&lt;&lt;</td>',
        '<td colspan="5">',dateyear,'年',datemonth,'月','</td>',
        '<td onclick="drawCalandar(',nextyear,',',nextmonth,')" style="cursor:pointer;background: #f60">&gt;&gt;</td>',
        '</tr>',
        '<tr style="background: #69f"><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>',
    ].join("");

    var dayNum_in_month=[31,28,31,30,31,30,31,31,30,31,30,31];
    var isleapyear=dateyear%4||dateyear%400;
    if(isleapyear===0){
        dayNum_in_month[1]=29;
    }
    var month_alldays=dayNum_in_month[datemonth-1];
    var line_top,line_bot;
    //当前日期上面的行数
    if((datetoday-dateday+1)%7!=0){
        line_top=Math.floor((datetoday-dateday+1)/7)+1;
    }else{
        line_top=Math.floor((datetoday-dateday+1)/7);
    }
    //当前日期下面的行数
    if((30-datetoday+dateday+1)%7!=0){
        line_bot=Math.floor((30-datetoday+dateday+1)%7)+1;
    }else{
        line_bot=Math.floor((30-datetoday+dateday+1)%7);
    }

    var list=[[""],[""],[""],[""],[""],[""],[""]];
    var cell;
    var tablebody=[];
    for(var i=1;i<7;i++){
        tablebody.push('<tr>');
        for(var j=0;j<7;j++){
            list[i][j]=datetoday-7*(line_top-i+1)+j-dateday;
            if((datetoday-7*(line_top-i+1)+j-dateday)<=0||(datetoday-7*(line_top-i+1)+j-dateday)>month_alldays){
                list[i][j]="&nbsp;"
            }
            if(list[i][j]!="&nbsp;"){
                cell='<td onclick="javascript:setDatetxt('+dateyear+','+datemonth+',this.firstChild.nodeValue);"'
                    +' onmouseover="javascript:setFocus(this);"  onmouseout="javascript:setFocusOut(this);" style="cursor:pointer">'+list[i][j]+"</td>";
                if(i===line_top+1&&j==dateday){
                    cell='<td onclick="javascript:setDatetxt('+dateyear+','+datemonth+',this.firstChild.nodeValue);"'
                        +' onmouseover="javascript:setFocus(this);"  onmouseout="javascript:setFocusOut(this);" style="cursor:pointer;background:#f60">'+list[i][j]+"</td>";
                }
            }else{
                cell="<td>&nbsp;</td>"
            }
            tablebody.push(cell);
        }
        tablebody.push('</tr>');
    }
    tablebody.push('<tr><td colspan="7" onclick="javascript:closeCal();" style="background:#399;cursor: pointer">关闭</td></tr>');
    ctable=ctablehead+tablebody.join("");
    document.getElementById('calandarContainer').innerHTML=ctable;
}
function setFocus(who){
    who.style.backgroundColor="#f60";
}
function setFocusOut(who){
    who.style.backgroundColor="";
}
function setDatetxt(y,m,d){
    document.getElementById('datetxt').value=y+"-"+m+"-"+d;
}
function closeCal(){
    document.getElementById('calandarContainer').innerHTML="";
}
function showCalandar(){
    drawCalandar();
}