// pagexy.js

// page-x , page-y 기능은
// 마우스의 x위치와, y값의 위치를 파악하는
// vw계산방법:  도형가로값 / 기준가로값 * 100

var mouseBox = $('#mouseBox');
var winW = $(window).width();

mouseBox.on('mousemove',function(e){
  var pagex = e.pageX;
  var pagey = e.pageY;
//  console.log('마우스 가로위치:', pagex);
//  console.log('마우스 세로위치:', pagey);
 
// 마우스 위치 / 브라우저 가로 * 100 => 마우스위치 %로 환산
 var mousePercent = parseInt(pagex / winW * 100);
 var mousey = parseInt(pagey / winW * 100);
// console.log('마우스 위치 %환산:', mousePercent);

  // css({transform:'translate(x% , y%)'});
  // css({transform:'translate(  +x+  % , +y+  %)'});
  // css({transform:'translate('+ x +'% ,'+ y +'%)'});
  
 $('.one')
    .css({transform:'translate('
              + -mousePercent +'%,' 
              + -mousey/10 +'%)'});
  
 $('.two')
    .css({transform:'translate('+ mousePercent +'%)'});
  
 $('.three')
    .css({transform:'translate('+ mousePercent/10 +'%)'});
  
});





