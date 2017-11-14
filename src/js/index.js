/* 
* @Author: Marte
* @Date:   2017-11-13 12:13:20
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 09:02:33
*/

jQuery(function($){
    var data = ['包装','服装','鞋靴','腕表','配饰','妆品','生活','婴孩','豪车'];

    var $nav1 = $('<ul/>');
    $nav1.addClass('nav_a');
    $nav2=$.map(data,function(item,idx){
        return `<li><a href="#">${item}</a></li>`
        
    }).join('');
    $nav1.append($nav2);
    $('#nav').append($nav1);


    function tu(num,dom){
        var $ul = $('<ul/>');
        $ul1=$.map(data,function(item,idx){
        return `<li><a href="#">${item}</a></li>`
        
        }).join('');
        $ul.append($ul1);
        $('dom').append($ul);
        }


    
})