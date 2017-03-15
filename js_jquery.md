# jQuery
> javascript library 이며, 자바스크립트를 좀더 쉽고 편하게 다가가기 위한 언어 ( javascript == jquery)
___
## jQuery 기초
___
 ### 설치
1. http://code.jquery.com 에서 파일을 다운
2. (7년 3월 15일 기준) jquery.3.1.1.min.js 파일
3. ui.min.js
4. html 문서에서 위 두개의파일을 링크

```javascript
<script src="jquery.3.1.1.min.js"></script>
<script src="ui.min.js"></script>
```
___
 ### 기초세팅
 1. head에 사용(과거1)
 ```javascript
 <script>
   $(document).ready(function(){
      // jquery 내용작성
   }); 
 </script>
 ```
 2. head에 축약사용(과거1)
```javascript
<script>
  $(function(){
    // jquery 내용작성
  });
</script>
```
___
#### 위 사용의 문제점
`<script>` 내부에사용하는 `$()`의 표기는 함수의 이름이다!
그렇기 때문에 다른 라이브러리 또는 프레임웍에서 동일한 함수의 이름으로 사용할 여지가 있다.
1. `$()`의 중복사용이 어렵다
2. html이 먼저 보여주고 스크립트가 작동되는것이 더 빠르게 인식된다.

**즉, 
  1. jquery와 다른 라이브러리를 같이 사용할 수 없다!
  2. `<head>`에서 사용하는것은 좋은 코딩이 아니다!
**
___
### 기초세팅 (해결책)
1. `$()`함수를 별도로 사용할 수있도록, 매개변수화 한다.
```javascript
<script>
  (function($){
    // jquery내용
  
  })(this.jQuery);
</script>
```

2. `<head>`가아닌 `<body>`내부의 말미에 사용
```javascript
<body>
.
.
.
.
<script>
  (function($){
    // jquery내용
  
  })(this.jQuery);
</script>
<body>
```
___
### 기초 세팅 정리(위내용 정리)
```html
 <!doctype html>
 <html>
   <head>
     <meta charset="utf-8" />
     <script src="./js/jquery/jquery.3.1.1.min.js"></script>
     <script src="./js/jquery/jquery.ui.min.js"></script>
     <title>jquery setting</title>
   </head>
   <body>
   <!-- html 마크업 -->
   
   
   <script>
    (function($){
      // jquery내용

    })(this.jQuery);
   </script>
   </body>
 </html>
```

___
### 기본 개념
#### javacript 과 같이사용하는 기본 내용
1. 변수(var)
2. 연산자(수치연산, 비교연산)
3. 자료형(숫자, 문자, 불린/비교, 특수형, 배열, 객체, 함수)
4. 문법(비교, 반복)

___
#### javascript 기본중에서 약간 더~
1. 변수는 이름이 항상 최상단으로 올라간다.(호이스트현상)
2. 지역변수/ 전역변수
3. 함수는 변수보다 더 상위로 호이스트 된다.
4. 함수의 return
5. 클로저
5. 객체와 배열을 같이사용하기(JSON)
6. 메소드체인
7. 콜백함수

___
### jquery 기본 익히기
#### jquery 기본 두가지
  - 무엇을(선택자)
  - 어떻게하기(메소드)

___
#### 선택자
기본 형태는 `$(' ')`
`$(' ')` 내부에는 css의 선택자형태와 동일하게 사용할 수 있다.
물론, 더 많은 부분들을 표현할 수 있다.


___
#### 메소드1
1. `hide();`  숨기기
2. `slideUp();` 숨기기
3. `fadeOut();` 숨기기
4. `show();` 나타나기
4. `slideDown();` 나타나기
4. `fadeIn();` 나타나기
5. `toggle();` 숨기기/나타나기 교대로사용
6. `slideToggle();` 숨기기/나타나기 교대로사용
7. `fadeToggle();` 숨기기/나타나기 교대로사용
8. `addClass();`  클래스 이름을 추가하는기능
9. `removeClass();` 클래스이름을 삭제하는 기능
10. `toggleClass();` 클래스이름을 넣고 빼는 기능

___
#### 메소드2
11. `css();` css를 사용할 수 있는 메소드
  - `css({'속성':'속성명','속성':'속성명','속성':'속성명'.... })`
12. `animate();` css기능을 애니메이션 효과로 사용하는 기능
  - `animate({'속성':'속성명','속성':'속성명'....},시간,'움직임');`

___
#### 이벤트
>선택자에게 무언가 조건(행동유발)을 주는것
`on('이벤트조건')` 메소드를 사용한다.
** 선택.on('이벤트', function(){ 
  // 사용하려는 것과 그것의 기능 
  });
**


































