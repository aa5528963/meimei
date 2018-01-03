<?php
    /*
        获取足球解说的数据
            * 分页
        pageNo => index,len
        1      => 0,10;
        2      => 10,10;
        3      => 20,10

        推导公式: (pageNo-1)*qty,qty


        isset() : 判断是否传参
        count() : 数组长度
     */

    // 获取前端传递的参数
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 28;//10

  


    // 文件路径
   $con = new mysqli('localhost','root','','meixiang');
    if($con->connect_errno){
        die('链接失败'.$con->connect_error);
    }
    $con->set_charset('utf8');
    $sql = "select * from list";
    $result = $con->query($sql);
   
    $row = $result->fetch_all(MYSQLI_ASSOC);
   
    // $row = json_encode($row,JSON_UNESCAPED_UNICODE); 

    


    // 根据分页截取数据
    $res = array(
        'data'=>array_slice($row, ($pageNo-1)*$qty,$qty),
        'total'=>count($row)
    );




    
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>