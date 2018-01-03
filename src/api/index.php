<?php
/**
 * @Author: Marte
 * @Date:   2018-01-02 19:21:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-01-03 16:40:49
 */ $con = new mysqli('localhost','root','','meixiang');
    if($con->connect_errno){
        die('链接失败'.$con->connect_error);
    }

    $con->set_charset('utf8');
    $sql = "select * from `index`";
    $result = $con->query($sql);
   
    $row = $result->fetch_all(MYSQLI_ASSOC);
   
    $row = json_encode($row,JSON_UNESCAPED_UNICODE); 

    echo $row;

?>