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
  var mb = $('.modal_btn');
  var mbBtn = mb.find('li');
  // 모달 창을 띄우려는 버튼 클릭 ...
  mbBtn.on('click', function(e){
    // a의 기본 이벤트 제거
    e.preventDefault();
    // 클릭한 li의 순서 확인
    // .eq() : 몇번째 선택  ,    .index() : 몇번째인지 확인
    var btnLi = $(this).index();
//    console.log(btnLi);  // 순서확인
    var mBox = $('.modal');
    // .modal 나타나기(배경 어둡게)
    mBox.fadeIn();
    // .modal>div 순서에 맞는것을 나타나게하기
    mBox.find('div').eq(btnLi).fadeIn();
  });
  
})(this.jQuery);










