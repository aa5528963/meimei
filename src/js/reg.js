/* 
* @Author: Marte
* @Date:   2018-01-05 21:04:39
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 16:17:42
*/

jQuery(function($){
        

        $('.btn').on('click',function(){
            var username = $('#username').val();
            var password = $('#password').val();
            
            $.ajax({
            url:'../api/reg.php',
            data:{username:username,password:password},
            type:'get',
            success:function(data){
                    console.log(data);

                    if(data==='fail'){
                        $('.output').html('用户名被占用');
                    }else{
                        $('.output').text('注册成功');
                    }
            }
            })
        })
       

        
})