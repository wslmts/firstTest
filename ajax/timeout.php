<?php
    header("Content-Type: text/plain");
   echo date('h:i:s') . "\n";
   // sleep for 10 seconds
   sleep(2);
   // wake up !
   echo date('h:i:s') . "\n";
?>