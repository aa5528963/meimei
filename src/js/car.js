/* 
* @Author: Marte
* @Date:   2018-01-05 10:39:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 17:50:16
*/
jQuery(function($){
        var id2 =  Cookie.get('id1');
        console.log(id2);

         $.ajax({
                url:'../api/car.php',
                
                type:'get',
                success:function(data){
                     console.log(data);
                    var res = JSON.parse(data);
                  
                    
              $p=$.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<tr><td  class="td1">
                        <p><img src="${item.imgurl}" class="p1"></p>
                        <div class="p2">${item.name}</div>
                        </td>
                        <td class="td2">--</td>
                        <td class="td3">￥${item.price}</td> 
                        <td class="td4"><button type="button" class="q1">-</button>
                            <input type="text" value="${item.nub}" class="nub" />
                            <button class="q2">+</button>
                        </td>
                        <td class="td5">${(item.price*item.nub).toFixed(2)}</td>
                        <td class="td6"><button>删除</button></td> </tr>`
                }).join('')
               ;   
                $('.tbody').append($p);

                  
                   

            



                }
        })

})