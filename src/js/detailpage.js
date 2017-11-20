/* 
* @Author: Marte
* @Date:   2017-11-16 11:37:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-20 16:47:56
*/

jQuery(function($){
    var pin = ['1.x******3','2.x****1','3.e*******3','4.x******3','5.x****1','6.e*******3','7.x******3','8.x****1']

    $.each(pin,function(idx,item){
        var $li = $('<li/>');
        $li.html(item);
        $('.pin31').append($li);
    })
   

    var $smallmap =$('.smallmap');
    var $big = $('.big');
    
    $smallmap.on('mouseover','img',function(e){
        var target = e.target ;
        var b = target.src;
        
               
        
        
        $big.attr('src',b);
         console.log($big[0]);

        $(this).parent().css({"border":"2px solid #ff6701"}).siblings('.content').css({"border":"1px solid #E0E0E0"});

        $big.gdsZoom({height:500});
        
    });
   
    var params = location.search;
        console.log(params)
        var yz_arr = params.slice(1).split('=');
        // console.log(yz_arr);
        console.log(yz_arr);
        var id ;
        yz_arr.forEach(function(item){
          var arr = item.split('=');
          // console.log(arr)

          if(arr[0] !== 'id'){
            id = arr[0];
          }
          console.log(id)


        });

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                console.log(res);
                var res = JSON.parse(xhr.responseText);
                console.log(res);
                var r = res[0];
                var a =res[0].imgurl;
                console.log(a);
                $('.small').attr('src',a);
                $('.name').html(r.name);
                $('.price').html(r.price);
            }
        }


        xhr.open('get',`../api/buy1.php?id=${id}`,true);
        xhr.send();


        document.cookie = 'id1=id';


        var $cartlist = $('.car');
        var $goodslist = $('.title35');
            
        $goodslist.on('click','button',function(){
                // var $currentLi = $(this).closest('li');

                // var $img = $currentLi.children('img');
                $img = $('.small');
                console.log($img);
                // 1>复制当前商品图片(用于实现动画效果)
                var $cloneImg = $img.clone();

                // 给复制图片设置样式
                $cloneImg.css({
                    position:'absolute',
                    top:$img.offset().top,
                    left:$img.offset().left,
                    width:$img.width()
                });

                // 把图片写入页面
                $cloneImg.appendTo('body');
                console.log($('.buycar'));
                // 动画效果:必须写入页面才会显示动画效果
               $cloneImg.animate({left:$cartlist.offset().left,top:$cartlist.offset().top+$cartlist.height(),width:60},function(){
                    //删除复制的图片
                    $cloneImg.remove();

                 document.cookie = `id1=${id}`;    
                 console.log(id);
                    
                })
            });













})