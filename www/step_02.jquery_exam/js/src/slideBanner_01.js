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
  // rbtn 클릭시 작동하는 내용처리
  rbtn.on('click', function(){
    // li순서가 변경되어있기 때문에 마지막을 재정리해서 liLast에 저장
    var lifirst = bannerUl.find('li').first();
    // 애니메이션 처리
    bannerBox.stop().animate({marginLeft:-200 +'%'}, timed, ef, function(){
      // 애니메이션 처리 후 재배치 
      bannerUl.append(lifirst);
      bannerBox.css({marginLeft:-100 + '%'});
    });
  }); // lbtn.on(click)
  
  
  
})(this.jQuery);










