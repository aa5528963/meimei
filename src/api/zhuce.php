<?php
/**
 * @Author: Marte
 * @Date:   2017-11-20 14:35:08
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-20 20:01:46
 */ $username = isset($_GET['username']) ? $_GET['username'] : null;
     $con = new mysqli('localhost','root','','zouxiu');
    if($con->connect_errno){
        die('链接失败'.$con->connect_error);
    }

    $con->set_charset('utf8');
    $sql = "select * from denglu where username=$username";
    if($sql){
        echo "no";
    }else{
        echo "yes";
    }

    