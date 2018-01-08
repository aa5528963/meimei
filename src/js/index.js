/* 
* @Author: Marte
* @Date:   2018-01-02 16:46:46
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 12:09:26
*/

jQuery(function($){

     $.ajax({
          // D:\1706\superiorHui\src\api
            url:'api/index.php',
            success:function(data){
                console.log(data);
                 var res = JSON.parse(data);
                console.log(res);

              var $s = $('<ul/>');
              $s.addClass('pink');
              var $p= $.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<li><a href="html/list.html" >
                                <img src="${item.imgurl}" title="${item.id}"></a>
                                <div class="bname">${item.name}</div>
                                <div class="price">
                                    ￥${item.nprice}
                                    <span class="price1">${item.oprice}</span>
                                </div>
                                
                            </li>`
                }).join('');   
                $s.append($p);
                
               $('.guess_m').append($s);
            var r = 0;
               $('.button_r').on('click',function(){
                    
                    r-=293;
                    if(r <=-2344){
                        r=-293;
                    }
                    $('.pink').animate({left:r});

               })

               $('.button_l').on('click',function(){
                    r+=293;

                    $('.pink').animate({left:r});

               })
            }
        })


        
     $.ajax({
          // D:\1706\superiorHui\src\api
            url:'api/index1.php',
            success:function(data){
                
                 var res = JSON.parse(data);
                console.log(res);

              var $s = $('<ul/>');
              var $p= $.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<li><a href="html/list.html" >
                                <img src="${item.imgurl}" title="${item.id}"></a>
                                <h4>${item.title}</h4>
                                <h3>${item.name}</h3>
                                <div class="shop">
                                    <div class="price_box">
                                        <span class="price2">￥${item.nprice}</span>
                                        <div class="m_price">
                                            <span>${item.oprice}</span>
                                            <p>立省${item.size}</p>
                                        </div>
                                    </div>
                                    <button type="button" title="加入购物车">加入购物车</button>
                                </div>
                            
                            </li>`
                }).join('');   
                $s.append($p);
               
               $('.guess_f').append($s);
            }
        })    


})