/* 
* @Author: Marte
* @Date:   2018-01-04 10:16:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 17:22:42
*/

jQuery(function($){

        var params = location.search;
        
        var yz_arr = params.slice(1).split('=');
        // console.log(yz_arr);
       
        var id ;
        yz_arr.forEach(function(item){
          var arr = item.split('=');
          // console.log(arr)

          if(arr[0] !== 'id'){
            id = arr[0];
          };
          console.log(id);
        })


        $.ajax({
                url:'../api/detail.php',
                data:{'id':id},
                type:'get',
                success:function(data){
                    
                    var res = JSON.parse(data);
                    
                    var r = res[0];
                    var a =r.imgurl;
                    console.log(a);
                     $('.big1').attr('src',a);
                     $('.big1').attr('data-big',a);
                     $('.big2').attr('src',a);
                     $('.big2').attr('data-big',a);
                     $('.tit').html(r.name);
                     $('.price1').html(`￥${r.oprice}`);
                     $('.price2').html(`￥${r.nprice}`);



                     $goodslist.on('click',function(){
                        document.cookie = `id1=${id}`; 
                        var date={
                            name:r.name,
                            price:r.nprice,
                            imgurl:r.imgurl,
                            nub:$('.nub').val()

                        }

                        $.ajax({
                            url:'../api/detail1.php',
                            data:date,
                            type:'get',
                            success:function(data){
                                    console.log(data);
                            }
                        })
                        

                        
                    })


                }
        })

        var i =1;
        $('.q1').on('click',function(){
            
            i--;
            if(i<=1){
                i=1;
            }
            $('.nub').val(i);

        })

        $('.q2').on('click',function(){
            
            i++;
            $('.nub').val(i);
        })
        var $sidebar = $('.sidebar');
        $sidebar.height($(window).innerHeight());
        $(window).resize(function(){
            $sidebar.height($(window).innerHeight());
        });

    //鼠标移入移出时高亮
    $sidebar.on('mouseover','.sidebar_l>div',function(){
            $(this).css('backgroundColor','#E6133C');
        });
        $sidebar.on('mouseout','.sidebar_l>div',function(){
            $(this).css('backgroundColor','');
        });


    document.cookie = `id1=${id}`;


    
        console.log(id);
   

     $goodslist = $('.button2');
     $carlist  = $('.buyCar');

            var index = 0;
            $goodslist.on('click',function(){
                // 获取当前li
                index++
                $('.nub').html(index);

                // 获取图片
                var $img = $('.big1');

                // 1>复制当前商品图片
                var $copyImg = $img.clone();

                // 定位复制的图片到当前图片位置
                $copyImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:200,
                    height:200
                });
                // 把复制的图片写入页面
                // 建议写到body
                $copyImg.appendTo('body');

                $copyImg.animate({
                    left:$carlist.offset().left,
                    top:$carlist.offset().top,
                    width:50,
                },function(){
                    //动画完成
                    // 删除复制的图片
                    $copyImg.remove();

                    //>复制当前商品所有信息(用于往购物车添加)
                    

                    // 删除$copyLi中的按钮
                   
                })


            });
            

            // 删除购物车中的商品
            // 利用事件委托
            $carlist.on('click','.btn-close',function(){console.log(666)
                $(this).closest('li').remove();
            })

})