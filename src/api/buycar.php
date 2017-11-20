<?php
    // 引入其他php文件
    // include 'connect.php';


    // /*
    //     接口：获取商品详细信息
    //  */
    
    // $id = isset($_GET['id']) ? $_GET['id'] : null;
    // var_dump($id);
   
    // // 编写sql语句
    // $sql = "select * from list where id=$id";
     
    // // 执行sql语句
    // // query()
    // // 得到一个：查询结果集
    // $result = $conn->query($sql);

    // // 使用查询结果集
    // // 返回数组
    // var_dump($result);
    // $row = $result->fetch_row();
    // // var_dump($row);
    
    // // // 把数组转换成json字符串
    // $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    // echo "$res";
    //释放查询结果集，避免资源浪费
    // $result->close();

    // // 关闭数据库，避免资源浪费
    // $conn->close();
    // 
     $id = isset($_GET['id']) ? $_GET['id'] : null;
     $con = new mysqli('localhost','root','','zouxiu');
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