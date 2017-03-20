//imageGallery.js
(function ($) {
  // 이미지 경로 변수할당
  var thumUrl = '../img/gallery/thum/', 
      bigUrl = '../img/gallery/big/';
  
  //1. 위 주소값 경로 확인
  /*$('#imgBox').html('<img>').find('img').attr('src', (bigUrl + 'photo1.jpeg') );*/
  
  // 각각의 이미지파일들  JSON형식으로 작성
  var gallery = {
    thum:[
          { src:'photo1_thum.jpg', alt:'섬네일이미지1' },
          { src:'photo2_thum.jpg', alt:'섬네일이미지2' },
          { src:'photo3_thum.jpg', alt:'섬네일이미지3' },
          { src:'photo4_thum.jpg', alt:'섬네일이미지4' },
          { src:'photo5_thum.jpg', alt:'섬네일이미지5' },
          { src:'photo6_thum.jpg', alt:'섬네일이미지6' }
         ],
    big:[
          { src:'photo1.jpeg', alt:'큰 이미지1 번째 관한 설명' },
          { src:'photo2.jpeg', alt:'큰 이미지2 번째 관한 설명' },
          { src:'photo3.jpeg', alt:'큰 이미지3 번째 관한 설명' },
          { src:'photo4.jpeg', alt:'큰 이미지4 번째 관한 설명' },
          { src:'photo5.jpeg', alt:'큰 이미지5 번째 관한 설명' },
          { src:'photo6.jpeg', alt:'큰 이미지6 번째 관한 설명' }
         ]
  };
  // json형식 찾기 간단한 테스트
  // console.log(gallery.thum[0].src);
  // console.log(gallery.thum[0].alt);
  
  // 반복 효과로 찾아내기, thum 안의 갯수'length' 파악하기
  // console.log(gallery.thum.length);
  var imgThum = $('#imgThum');
  
  // JSON형식의 이미지를 #imgThum 내부 li에 각각 할당
  var i = 0;
  for(; i < gallery.thum.length; i++){
//    console.log(gallery.thum[i].src + ' : ' +gallery.thum[i].alt); // 갯수검증
    imgThum.append('<li><a href="#"><img></a></li>');
    var liEq = imgThum.find('li').eq(i).find('img');
    
      liEq.attr('src', (thumUrl + gallery.thum[i].src) )
      liEq.attr('alt', (thumUrl + gallery.thum[i].alt) );
  }
  
  
  
  
  // li(이미지) 클릭했을경우 
  imgThum.find('li').on('click', function(e){
    e.preventDefault();
    // 선택한 이미지의 위치확인 및 연결된 큰이미지(JSON에서) 찾기
      // 클릭한 이미지 리스트 순번 찾기
    var imgIndex = $(this).index(); 
  // 선택된 이미지의 큰이미지를 #imgBox내부에 img코드를 생성후 삽입
    var imgBox = $('#imgBox');
    imgBox.html('<img>');
    imgBox.find('img').attr('src', (bigUrl + gallery.big[ imgIndex ].src));
    imgBox.find('img').attr('alt', (bigUrl + gallery.big[ imgIndex ].alt));
  
  // 별도의 코드를 이용해 이미지 설명글을 보이게 첨부
  });
  
  
  
  
})(this.jQuery);