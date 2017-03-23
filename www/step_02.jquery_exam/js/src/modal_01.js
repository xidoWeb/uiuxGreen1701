//modal_01.js
(function($){
  // #headBox의 높이값 계산(height:auto로 설정되어있기때문에 확인해야함)
  var head = $('#headBox');
  var headHeight = head.height();
  //1. #headBox의 padding값을 확인(위,아래 따로 분류)
  //2. 값들이 모두 문자로 환산되기 때문에(10px) 강제로 숫자화 처리( parseInt();  )
  var headPaddingTop = parseInt(head.css('paddingTop'));
  var headPaddingBtm = parseInt(head.css('paddingBottom'));
//  console.log(headPaddingTop, headPaddingBtm);
  // #headbox의 높이+paddingTop+paddingBottom을 모두 합산하여 
  // 아래있는 #addBox의 margin에 적용
  $('#wrap').css({paddingTop:headHeight + headPaddingTop + headPaddingBtm +'px'});
 // ------------------------------------------------------------------------------
  // head내의 a를 클릭하면...
  head.find('a').on('click', function(e){
    e.preventDefault();
    // html, body가 움직여서 처리
    var timed = 500;
    $('html, body').stop().animate({scrollTop:$(this.hash).offset().top},timed);
  });
  
  // modal -------------------------------------------------------------------
  
  
  
})(this.jQuery);

