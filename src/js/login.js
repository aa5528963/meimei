/* 
* @Author: Marte
* @Date:   2018-01-05 20:48:16
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 16:35:21
*/

jQuery(function($){
     

      $('.btn').on('click',function(){
            var username = $('#username').val();
            var password = $('#password').val();
            
            $.ajax({
            url:'../api/login.php',
            data:{'username':username,'password':password},
            type:'get',
            success:function(data){
                    console.log(data);

                    if(data==='ok'){
                        
                        location.href = '../index.html';
                    }else if(data==='fail'){
                        $('.output').text('用户名或密码错误');
                    }
            }
            })
        })

})