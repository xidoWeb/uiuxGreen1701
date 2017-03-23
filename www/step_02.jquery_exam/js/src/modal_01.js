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
  // 차후 팝업 버튼의 상황에 따라 적용하기위해 함수 Base로 처리, 
  // 하단의 객체  popupObj 참조 및 확인
  function Base(){ 
    $('#wrap').css({paddingTop:headHeight + headPaddingTop + headPaddingBtm});
  } 
  Base();
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
  var mBox = $('.modal');
  // 모달 창을 띄우려는 버튼 클릭 ...
  mbBtn.on('click', function(e){
    // a의 기본 이벤트 제거
    e.preventDefault();
    // 클릭한 li의 순서 확인
    // .eq() : 몇번째 선택  ,    .index() : 몇번째인지 확인
    var btnLi = $(this).index();
//    console.log(btnLi);  // 순서확인
    // .modal 나타나기(배경 어둡게)
    mBox.fadeIn();
    // .modal>div 순서에 맞는것을 나타나게하기
    mBox.find('div').eq(btnLi).fadeIn();
  
  // 닫기 버튼 생성
  mBox.find('div').prepend('<button type="button" class="mClose">닫기</button>');
  $('.mClose').css({width:'3.5em', height:'3.5em', backgroundColor:'#245',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
  
  var mClose = $('.mClose');
  mClose.on('click', function(e){
    e.preventDefault();
    mBox.find('div').find('.mClose').remove();
    mBox.find('div').hide();
    mBox.hide();
  });
  });
  
    
// --------------------------------------------
  var popup = $('.popup'); //변수 popup 소문자
  //popup 설정 후 함수처리
function PopUp(){
//  var popup = $('.popup');
  var popupH = popup.height();
  var popupP1 = parseInt(popup.css('paddingTop'));
  var popupP2 = parseInt(popup.css('paddingBottom'));
    $('#wrap').css({marginTop:popupH, 
                    paddingTop:headPaddingTop+headPaddingBtm});
    $('#headBox').css({top:popupH+popupP1+popupP2});
    console.log(popupH+popupP1+popupP2);
  }
  // 테스트 popup실행
//  PopUp();

  
  // popup버튼 클릭
  popup.find('.close_btn').on('click', function(){
    popup.hide();
  });
//------------------------------------------
  /* 상황에따른 기능함수 적용 
  * 함수 설정 popup창이 열렸을경우, 닫혔을 경우를 판단
  * 열렸을경우에는 PopUp()함수를 실행, 닫혔을 경우에는 Base()함수를 실행
  */
  // 조건상황을 따르기위해 객체를 생성
  // 팝업이 열렸을경우에는 popupObj.on;
  // 팝업이 닫혔을경우  popupObj.off;
  var popupObj = {on: PopUp, off: Base};
  // popupObj.on;
  // popupObj.off;
  var dp = popup.css('display');
  // 미완성
  if(dp == 'block'){
    popupObj.on;
    console.log(popupObj.on);
  } else {
    popupObj.off;
    console.log(popupObj.off);
  }
  
  
})(this.jQuery);










