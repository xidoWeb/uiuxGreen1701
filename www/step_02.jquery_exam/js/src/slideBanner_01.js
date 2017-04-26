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
  
  
  
})(this.jQuery);
