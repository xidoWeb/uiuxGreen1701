// banner_02.js

(function($){
  /* 
  전체 배너(adBanner)
  각각을 담은 (bannerUl)
  배너 li (bannerLi)
  인디케이트 상자(indiUl)
  첫번째 인디케이트(indiFir)
  마지막 배너(lastAd)
  마지막 인디케이트(lastInd)
  시간설정(timed)
   */
  
  // 변수 할당
  var adBanner = $('#adBanner'),
      bannerUl = adBanner.find('.banner_box').children('ul'),
      bannerLi = bannerUl.children('li'),
      lastAd   = bannerLi.last(),
      indiUl   = adBanner.find('.indi'),
      lastInd  = indiUl.children('li').last(),
      timed    = 1000;
  
  // 마지막 배너를 복제해서 사용하고 크기를 수정하면 전체가 틀어질 수 있으므로 미리
  // 각 배너 하나의 크기 li를 재설정 하기위해 기존 값 가져오기
  var adWidth = lastAd.width();
  // bannerUl 안의 li값 재설정
  bannerLi.width(adWidth);
  
  
  // 마지막li를 맨앞으로 복제
  lastAd.clone().prependTo(bannerUl);
  
  // 복제되었으니 배너광고갯수는 기존내용에 +1 
  // console.log(bannerUl.children('li').length);
  /* 1. 배너박스의 크기를 갯수만큼 늘려주자!, 
     2. li의 크기를 다시 할당하자!
  */

  // 복제 후 배너의 갯수 확인
  var adlength = bannerUl.children('li').length;
  // bannerUl의 크기값 재설정
  var bannerlen = bannerUl.width(100 * adlength + '%');

  // bannerUl 왼쪽으로 한칸 이동
  bannerUl.css('marginLeft', '-100%');

  // -------------------------------------
  /* 인디케이트 상태를 배너와 동일하게 복제 처리
  1. 변수 내용 체크
    indiUl   = adBanner.find('.indi'),
    indiFir  = indiUl.children('li').first(),
    lastInd  = indiUl.children('li').last(),
  2. 인디케이트 복제
  3. 복제된 인디케이트는 보이지 않게 처리
  */
  // 인디케이트 복제
  lastInd.clone().prependTo(indiUl);
  // 복제된 첫 인디케이트 처리
  var indiFir  = indiUl.children('li').first();
  // console.log(indiFir.text()); // 첫번째 내용 확인
  indiFir.css('display','none');  
  // 갯수변동 여부 확인
  // console.log(indiUl.children('li').length);
  
  // ------------------------------------------------
  /* 인디케이트 클릭시 배너 이동
  */
  // 변경된 인디케이트 변수처리
  var indiLi = indiUl.children('li');
  // 인디케이트 클릭시 
  indiLi.on('click', function(e){
    // 이벤트 삭제
    e.preventDefault();
  // 해당하는 인디케이트의 순서를 파악
    var $this = $(this);
    var num = $this.index();
   // console.log(num); // 순서 확인 검증
    
  // 해당순서의 배너가 화면에 위치하도록 처리(margin-left)
    bannerUl.animate({marginLeft:-100 * num +'%'}, timed);
    indiLi.removeClass('active');
    $this.addClass('active',timed/3);
  });
  
  
  
  
  
  
  
  
  
  
  
 }(this.jQuery));