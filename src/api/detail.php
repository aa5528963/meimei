<?php
    
     $id = isset($_GET['id']) ? $_GET['id'] : null;
     
     $con = new mysqli('localhost','root','','meixiang');
    if($con->connect_errno){
        die('链接失败'.$con->connect_error);
    }

    $con->set_charset('utf8');
    $sql = "select * from list where id=$id";
    $result = $con->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $row = json_encode($row,JSON_UNESCAPED_UNICODE);
    echo $row;

?>