/* 
* @Author: Marte
* @Date:   2017-11-20 09:39:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-20 18:56:55
*/

jQuery(function($){
        
        var id2 =  Cookie.get('id1');
        console.log(id2);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                console.log(res);
                var res = JSON.parse(xhr.responseText);
                console.log(res);
                console.log(res[0].price);
               var $tr = $('<tr/>');
               $tr.html(`<td colspan="2" class="td1"><img src="${res[0].imgurl}" class="p1"><div>
                        <div class="p2">${res[0].name}</div>
                        <p class="p3">${res[0].category}</p>
                        </div></td>
                        <td class="td2">${res[0].price}</td>

                        <td class="td3"><button>-</button>
                            <input type="text" id="text2">
                            <button>+</button>
                            </td>
                            <td><button class="del">删除</button></td>`);
                        var index = 0;

                       $('#text2').attr({'placeholder':index});
                       console.log($('#text2'));
                        var text2 = document.querySelector('#text2');
                        console.log(text2);
                $('.buycar').append($tr);

                var del = document.querySelector('.del');


            }

        }


        xhr.open('get',`../api/buycar.php?id=${id2}`,true);
        xhr.send();



})