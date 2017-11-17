/* 
* @Author: Marte
* @Date:   2017-11-16 11:37:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 11:26:26
*/

jQuery(function($){
    var pin = ['1.x******3','2.x****1','3.e*******3','4.x******3','5.x****1','6.e*******3','7.x******3','8.x****1']

    $.each(pin,function(idx,item){
        var $li = $('<li/>');
        $li.html(item);
        $('.pin31').append($li);
    })
    console.log($('.pin31'));

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
    






















})