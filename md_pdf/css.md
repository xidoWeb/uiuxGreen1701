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
  ### size &amp; unit
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