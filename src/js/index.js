/* 
* @Author: Marte
* @Date:   2017-11-13 12:13:20
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 14:54:07
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

    var navdata = [{

        name:'上装',
        value:['卫衣','毛衣','衫','T恤','polo衫','大毛衣','皮衣','风衣','大衣','超级大衣','大毛衣','皮衣','风衣','大衣','超级大衣']
        },{
        name:'下装',
        value:['卫衣','毛衣','衫','T恤','polo衫','大毛衣','皮衣','风衣','大衣','超级大衣','大毛衣','皮衣','风衣','大衣','超级大衣']
    
        },{
        name:'套装',
        value:['卫衣','毛衣','衫','T恤','polo衫','大毛衣','皮衣','风衣','大衣','超级大衣','大毛衣','皮衣','风衣','大衣','超级大衣']
    
        },
        {
        name:'内衣',
        value:['卫衣','毛衣','衫','T恤','polo衫','大毛衣','皮衣','风衣','大衣','超级大衣','大毛衣','皮衣','风衣','大衣','超级大衣']
    
        },{
        name:'袜子',
        value:['卫衣','毛衣','衫','T恤','polo衫','大毛衣','皮衣','风衣','大衣','超级大衣','大毛衣','皮衣','风衣','大衣','超级大衣']

    
        }



    ]

    var pai = ['热门品牌：','卡迪亚','欧玛尼','西铁城','天欧港','啸托尼','卡迪亚','欧玛尼','西铁城','天欧港','啸托尼','卡迪亚','欧玛尼','西铁城','天欧港','啸托尼','卡迪亚','欧玛尼','西铁城','天欧港','啸托尼','卡迪亚','欧玛尼','西铁城','天欧港','啸托尼']

    var $bigdiv = $('<div/>');
    $.each(navdata,function(idx,item){
        var $div = $('<div/>');
        var $h4 = $('<h4/>');
        $h4.html(item.name+':');
        $div.append($h4);
       
        var $ul = $('<ul/>');
        $.each(item.value,function(idx,item){
            
            
            var $li = $('<li/>');
            $li.html(item);
            $ul.append($li);
        })
        $div.append($ul);
         console.log($div);
    });
    var $ul1 = $('<ul/>');
    $.each(pai,function(idx,item){
            var $li = $('<li/>');
            $li.html(item);
            $ul1.append($li);
    })
            
            console.log($ul1);

    var $lun = $('#lun');

    $lun.lxCarousel({
                imgs:['img/lu1.jpg','img/lu2.jpg','img/lu3.jpg','img/lu4.jpg','img/lu5.jpg'],
                type:'horizontal'
                
            })



    function tu(num,dom){
        var $ul = $('<ul/>');
        $ul1=$.map(data,function(item,idx){
        return `<li><a href="#">${item}</a></li>`
        
        }).join('');
        $ul.append($ul1);
        $('dom').append($ul);
        }


    
})