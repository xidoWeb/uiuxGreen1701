// slideBanner_01.css

(function($){
  var banner = $('#adBanner');
  var bannerBox = $('.banner_box');
  var bannerUl = bannerBox.find('ul');
  var bannerLi = bannerUl.find('li');
  var liLast = bannerLi.last();
  // li마지막을 처음으로 이동
  // prepend와 prependTo 구분: 주어의 위치가다름
  bannerUl.prepend(liLast); //liLast.prependTo(bannerUl); 
  // bannerBox를 한칸앞으로이동
  bannerBox.css({marginLeft: -100 + '%'});
  // banner 넘침 숨김
  // banner.css({overflow:'hidden'});
 // ----------------------------------------------------- 
  var lbtn = $('.lbtn');
  var rbtn = $('.rbtn');
  var timed = 1000; 
  //http://easings.net/ko // jquery easing 내용위치
  var ef = 'easeOutBack'; 
  // lbtn 클릭시 작동하는 내용처리
  lbtn.on('click', function(){
    // li순서가 변경되어있기 때문에 마지막을 재정리해서 liLast에 저장
    liLast = bannerUl.find('li').last();
    // 애니메이션 처리
    bannerBox.stop().animate({marginLeft:0}, timed, ef, function(){
      // 애니메이션 처리 후 재배치 
      bannerUl.prepend(liLast);
      bannerBox.css({marginLeft:-100 + '%'});
    });
  }); // lbtn.on(click)
  
  // rbtn을 클릭했을경우의 함수기능을 변수로 처리해서 먼저 작업
  var rotateAni = function(){
    // li순서가 변경되어있기 때문에 마지막을 재정리해서 liLast에 저장
    var lifirst = bannerUl.find('li').first();
    // 애니메이션 처리
    bannerBox.stop().animate({marginLeft:-200 +'%'}, timed, ef, function(){
      // 애니메이션 처리 후 재배치 
      bannerUl.append(lifirst);
      bannerBox.css({marginLeft:-100 + '%'});
    });
  } // rotateAni
  
  // rbtn 클릭시 작동하는 내용처리
  rbtn.on('click', rotateAni); // rbtn.on(click)
  // ------------------------------------------------
  // 일정 시간마다 화면이 움직이는것!
  // setInterval();
  var auto = function(){
    setInterval(rotateAni, timed*2);
  }
 auto();
  
  // 배너위에 마우스가 올라가면 슬라이드 배너는 일시정지
  // clearInterval();
  banner.on('mouseenter',function(){
    
  });
  
  // 다시 배너를 벗어나면 슬라이드 배너는 재생
  // setInterval();
  
  
  
})(this.jQuery);










