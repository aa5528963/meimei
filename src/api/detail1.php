<?php
    include 'connect.php';
    
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '123456';
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : '123456';
    $nub = isset($_GET['nub']) ? $_GET['nub'] : '';


    // $email = isset($_GET['email']) ? $_GET['email'] : '';
    // $grade = isset($_GET['grade']) ? $_GET['grade'] : '';
    // $gender = isset($_GET['gender']) ? $_GET['gender'] : '';
    // $birthday = isset($_GET['birthday']) ? $_GET['birthday'] : '';
    // $phone = isset($_GET['phone']) ? $_GET['phone'] : '';

    //查看用户名是否已经存在
    

        /*
            password_hash()     //对密码加密.
                * PASSWORD_DEFAULT：Bcrypt加密算法，字段超过60个字符长度，
                * PASSWORD_BCRYPT：字符串长度总为60。
            password_verify()    //验证已经加密的密码，检验其hash字串是否一致.
         */
        // $password = password_hash($password,PASSWORD_DEFAULT);

        

        $sql = "insert into car (name,price,imgurl,nub) values('$name','$price','$imgurl','$nub')";


        // 获取查询结果
        $result = $conn->query($sql);

        if ($result) {
            echo "ok";
        } else {
            echo "no";
        }
    

    
    

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>