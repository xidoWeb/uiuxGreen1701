# CSS
___
## css3의 개념 및 특징
  [css 기능작동 여부](http://caniuse.com)

  
___
## CSS2
___
  ### 선택자
  [css 선택자의 발전](http://css4-selectors.com/browser-selector-test/)
  [css4_브라우저 확인](http://css4.rocks/)
  
___
  ### 작성 방법(위치)
  ___
  #### 직접 작성하는 방법
```
 <!DOCTYPE html>
 <html lang="ko-KR">
  <head>
    <meta http-equiv="X-UA-compatable" content="IE-edge" />
    <meta charset="utf-8" />
    <style></style>
    <script></script>
  </head>
  <body>
  </body>
 </html>
```

___
#### 별도로 파일을 불러서 사용 1
```
 <!DOCTYPE html>
 <html lang="ko-KR">
  <head>
    <meta http-equiv="X-UA-compatable" content="IE-edge" />
    <meta charset="utf-8" />
    <link rel="stylesheet" href="-css 파일 경로-" />
    <script></script>
  </head>
  <body>
  </body>
 </html>
```
위코드에서 나와있듯 `link`코드를 작성하여 css를 분리 시킨다.
`<link rel="stylesheet" href="-css 파일 경로-" />`

___
#### 별도로 파일을 불러서 사용 2
```
 <!DOCTYPE html>
 <html lang="ko-KR">
  <head>
    <meta http-equiv="X-UA-compatable" content="IE-edge" />
    <meta charset="utf-8" />
    <style>
      @import url("불러올 파일의 경로");
    </style>
    <script></script>
  </head>
  <body>
  </body>
 </html>
```
위코드에서 나와있듯 `style`코드 내에서 `@import` 기능을 이요하여 css파일을 불러오는 방법.
`@import url("불러올 파일의 경로");`

___
### css를 이해하기 전에~ `Bootstrap`을 이용해 봅시다~!
Bootstrap ?: css를 좀더 편하게 작업을 할 수 있도록 돕는 framework
핵심: `class` 이름만을 활용해서 반응형 웹, 색상, 크기, 디자인
CDN(contents delivery network) 기능을 이용해야합니다!
(사실은 다운받아서 써도 됩니다!)
[bootstrap 사이트 바로가기](http://getbootstrap.com)
[bootstrap한글 사이트 바로가기](http://bootstrapk.com)


___
 ### 선택자
 1. 타입선택자(태그선택자)
```css
    body{}
    html{}
    h1{}
    h2{}
    p{}
    img{}
```
___
 2. 자손 선택자: `html body{}` 모양으로 태그와 태그사이에 띄어쓰기로 선택
 ```
  ul a{}
  ul li a span{}
  ul span{}
  ul.box span{}
 ```
___
 3. 자식 선택자: `html > body{}` 형식으로 태그와 태그사이에 &gt; 모양을 삽입하여 부모 자식의 관계를 형성
 ```css
  ul > li{}
  ul > li > a{}
  #wrap{}
 ```
 ___
 4. class선택자, id선택자: class `.` 기호를, id `#`기호를 붙여사용한다.
```css
 .container{}
 .container>li{}
 div.container{}
 
 .active{background-color:#000; color:#aaa;}
 div.active{color:#fff;}
 p.active{color:#fa0;}
 li.active{color:#00a;}
  
 div#wrap{}
 #wrap{}
```
___
5. 가상선택자: 타입이나, id/class 등의 선택된것의 기능이나 상태를 변경할때
 -  :hover(마우스 올렸을때)
 -  :active(마우스 누르고 있을때)
 -  :visited(방문한 기록이 있을때 , 주로 a태그가 사용): check
 -  :checked, :selected
```css
 h1{color:#c99; font-size:2em;}
 h1:hover{color:#fff;}
 h1:active{color:#333;}
```

___
  ### size &amp; unit
  
  #### size
  width:넓이
  min-width:최소 넓이
  max-width:최대 넓이
  height:높이
  min-height:최소 높이
  max-height:최대 높이
  - 조건: 최소, 최대를 사용할때에는 무조건 기본형태를 취해야한다.
___  
  #### 단위
  0: 크기값이 없다.
  none: 존재하지 않는다.
  auto: 자동
  1이상일경우에는 단위를 붙인다.
  	- px: pixel을 의미
  	- pt: point
  	- em: 상대크기값을 나타내는 단위 <br>  (단, 박스의 크기는 절대/ 폰트의 크기는 상대)
  	- %: percent(상대크기)
  	- rem: 최초의 조건에 맞춰 만들어지는 상대크기
  	- vw: 화면(view)의 가로값(width)의 크기를 기준의 단위
  	- vh: 화면(view)의 세로값(height)의 크기를 기준의 단위
  
___
  ### background
___
  ### display(basic) &amp; visibility
  #### display
  #### visibility
___
  ### float & clear
___
  ### margin &amp; padding &amp; border &amp; outline
  #### margin
  #### padding
  #### border
  #### outline
  #### box-sizing
___
  ### overflow
___
  ### position
___
  ### font
  
__________
## CSS3
___
  ### 선택자
___  
  ### font
  #### webfont
___
  ### prefix
___
  ### border-radius
___
  ### transform
___
  ### transition
___
  ### animateion
___________


___
[처음으로 돌아가기](./webStandard.md)