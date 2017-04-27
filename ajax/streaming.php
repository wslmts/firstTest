<?php
set_time_limit(0);//使请求网页不超时
//出现下面三句话则返回头中出现Transfer-Encoding:chunked

ob_start();
ob_flush();
flush();

    $i=0;
    while(true){
    echo "Some data $i";
    flush();
    sleep(1);
    $i++;
   }

?>