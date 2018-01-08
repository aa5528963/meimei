/* 
* @Author: Marte
* @Date:   2018-01-03 15:52:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-03 21:05:16
*/

jQuery(function($){

    var pageNo = 1;
    var qty = 28;

      $.ajax({
                    url:'../api/list.php',
                    data:{'pageNo':pageNo,'qty':qty},
                    type:'get',
                    success:function(data){
                           console.log(data);
                           var row = JSON.parse(data);
                           var res = row.data;
                            console.log(res);
                            gener(res);


                         var page_len = Math.ceil(row.total/qty);
                         var $div = $('<div/>')
                         $div.addClass('page');

                         for(var i=0;i<page_len;i++){
                              var $span = $('<span/>');
                              $span.text(i+1);
                              
                              $div.append($span);
                         }
                         $('.main_m').append($div);

                        $('.main_m').on('click','img',function(e){
                            var target = e.target;
                            var id = target.getAttribute('title');
                            console.log(666);
                            var params = '?id='+id;
                                        //通过地址传id
                            location.href = './detail.html' + params;
                        })

                         $('.page').on('click','span',function(e){
                                var target = e.target;
                                pageNo = target.innerText*1;
                                

                                $(this).addClass('active1').siblings('span').removeClass('active1');
                                $.ajax({
                                    url:'../api/list.php',
                                    data:{'pageNo':pageNo,'qty':qty},
                                    type:'get',
                                    success:function(data){
                                            var row = JSON.parse(data);
                                            var res = row.data;
                                            $('.list').html('');
                                             gener(res);

                                    }
                                })

                         })
                        
                    }




            });









    function gener(res){
        var $s = $('<ul/>');
               $s.addClass('clearfix') ;
               $s.addClass('list') ;

              var $p= $.map(res,function(item,idx){
                    // console.log(item,idx)
                    return `<li><a href="#" >
                                <img src="${item.imgurl}" title="${item.id}"></a>
                                <h4>${item.title}</h4>
                                <h3>${item.name}</h3>
                                <div class="price1">${item.oprice}</div>
                                <div class="price2">${item.nprice}</div>
                                <p><button type="button" title="加入购物车">加入购物车</button></p>
                            
                            </li>`
                }).join('');   
                $s.append($p);
               
               $('.main_m').append($s);


    }


})