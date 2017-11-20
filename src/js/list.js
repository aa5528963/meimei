/* 
* @Author: Marte
* @Date:   2017-11-19 13:35:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-20 12:49:15
*/

jQuery(function($){

    $.ajax({
          // D:\1706\superiorHui\src\api
            url:'../api/list.php',
            success:function(data){
               
                var res = JSON.parse(data);
                
                var $s = $('<ul/>');
              var $p= $.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<li>
                                <ol>
                                <li class="li1"><a href="#"><img src="${item.imgurl}" title="${item.id}" class="img1"></a></li>
                                    <li class="li2">${item.name}</li>
                                    <li class="li3">${item.category}</li>
                                    <li class="li4">${item.price}</li>

                                </ol>
                           </li>`
                }).join('');   
                $s.append($p);
              
               $('.list').append($s);



            }
        })
          
        $('.list').on('click','img',function(e){
            var target = e.target;
            var id = target.getAttribute('title');
            console.log(666);
            var params = '?id='+id;
                        //通过地址传id
            location.href = './detailpage.html' + params;
        })
         //        var a = $('.list');
         //        console.log(a[0]);
         // a.onclick=function(e){
         //            var target = e.target.nodeName.toLowerCase();
         //            if (target==='img'||target==='h4'||target==='p') {
         //                console.log(e.target.parentNode);
         //                var targetLi = e.target.parentNode;
         //                var id = targetLi.getAttribute('id');
         //                console.log(id);
         //                var params = '?id='+id;
         //                //通过地址传id
         //                location.href = 'list_details.html' + params;
         //           };
                    
         //          }




})