<?php
set_time_limit(0);//ʹ������ҳ����ʱ
//�����������仰�򷵻�ͷ�г���Transfer-Encoding:chunked

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