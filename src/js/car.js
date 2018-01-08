/* 
* @Author: Marte
* @Date:   2018-01-05 10:39:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-08 17:26:42
*/
jQuery(function($){
        var id2 =  Cookie.get('id1');
        console.log(id2);
// ----------------------购物车请求数据
         $.ajax({
                url:'../api/car.php',
                
                type:'get',
                success:function(data){
                 console.log(data)    
                var res = JSON.parse(data);
                  
                var total = 0;
                $p=$.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<tr><td  class="td1">
                        <p><img src="${item.imgurl}" class="p1" ></p>
                        <div class="p2">${item.name}</div>
                        </td>
                        <td class="td2">--</td>
                        <td class="td3">￥${item.price}</td> 
                        <td class="td4"><button type="button" class="q1">-</button>
                            <input type="text" value="${item.nub}" class="nub" />
                            <button class="q2">+</button>
                        </td>
                        <td class="td5">${(item.price*item.nub).toFixed(2)}</td>
                        <td class="td6"><button class="btn" title="${item.id}">删除</button></td> </tr>`

                        

                }).join('');
                  
                $('.tbody').append($p);
// -------------------------计算购物车总价
                $.each(res,function(idx,item){
                    total+=item.price*item.nub;
                })

                

                $('.price').text('￥'+total);

 // ----------------------------------按删除按键删除购物车里的相应数据               
                $('.btn').on('click',function(){
                   
                  
                    var id = $(this).attr('title');
                    console.log(id);
                    var r = $(this);
                    $.ajax({
                        url:'../api/car1.php',
                        data:{'id':id},
                        type:'get',
                        success:function(res){
                            console.log(res);

                        r.closest('tr').remove();

                        
                       
                       
                           

                        }
                    })                   
                })


                  
                   

            



                }
        })

})