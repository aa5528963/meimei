<?php
    $con = new mysqli('localhost','root','','zouxiu');
    if($con->connect_errno){
        die('链接失败'.$con->connect_error);
    }

    $con->set_charset('utf8');
    $sql = "select * from data1";
    $result = $con->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $row = json_encode($row,JSON_UNESCAPED_UNICODE);
    echo $row;
    
    // //实现分页效果  
    // $pagenumber = isset($_GET['pageNumber']) ? $_GET['pageNumber'] : ' ';
    // //每一页显示的商品数量
    // $goodsnum = 40;
    // // $index = isset($_GET['index']) ? $_GET['index'] : ' ';
    // //总的商品量
    // $total = count($row);
    // //总共需要设置的页数
    // $page = ceil($total/$goodsnum);
    // //根据前端传送过来的页码进行获取数据
    // $jieguo = array_slice($row,$goodsnum*($pagenumber-1),$goodsnum);
    // // var_dump($jieguo)
    // //创建一个关联数组，然后把总页码页一起传送过去
    // $g_jieguo = array("goods"=>$jieguo,"total"=>$page);
    // $g_jieguo = json_encode($g_jieguo,JSON_UNESCAPED_UNICODE);
    // echo $g_jieguo;
    
?>