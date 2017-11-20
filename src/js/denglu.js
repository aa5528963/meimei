/* 
* @Author: Marte
* @Date:   2017-11-20 14:32:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-20 20:09:27
*/

    
jQuery(function($){
        var username = $('#zhuce');
        var password = $('#mima');

        var btn2 = document.querySelector('.btn2');
            console.log(btn2);
        btn2.onclick = function(){

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                var res = xhr.responseText;

                console.log(res);
            }
         }    
         xhr.open('get',`../api/zhuce.php?username=${username}`,true);
         xhr.send();
        
        }
        
       




})
