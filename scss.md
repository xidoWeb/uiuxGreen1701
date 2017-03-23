# sass/ scss

## CSS 전처리기

css라던가 기타 언어 프로그램을 사용할때 결과를 보기 이전에 먼저 작업처리하는 프로그램 전처리기

css를 사용하는데 문제점은 변수의 사용이 불가능, for/if 같은 반복처리하는기 불편 -> 이러한 문제점을 해결하고 좀더 손쉽게 사용할 수 있도록 처리한 언어 프로그램

sass/scss, less, stylus, postCSS, nextCss

공식 사이트 <http://www.sass-lang.com/>

한국어 번역 <https://sass-guidelin.es/ko/>



## 설치법

1. ruby활용하여 사용하기(반드시 루비 설치)

2. prepros.io

3. 자동화도구( grunt, gulp, webpack, yoman ......)

4. 에디트를 통한 변환

   ## 세팅법

   1. css폴더와 scss폴더를 구분
   2. public폴더와 www폴더를 구분(작업과 배포 구분)

## 사용법1

1. 루비기반의 cli를 켠다!
2. 해당하는 폴더에 `css​`와 `scss`폴더를 생성(파일을 구분)
3. 명령어를 입력
```cli
$ sass scss:css                                   // scss 폴더에서 css로 변환(한번만 실행)

$ sass -E utf-8 scss:css                          // 한글주석도 문제없이 처리

$ sass --style compact scss:css                   // 변환시 코드내용을 각각 한줄로

$ sass --watch scss:css                           // 실시간으로 변환

$ sass --watch --style compact -E utf-8 scss:css  //종합처리 
```


## 기본 사용1
1. 변수:  $를 앞에붙이면 변수이름이 된다. -> 사용은 $로 시작하는 이름을 사용
2. 중첩...
3. `@import '';`   `@import url();`와는 다른 코드로 scss의 파일을 모아서 하나로 병합
4. `@mixin fn(){}` sass에서 사용하는 함수의 이름 사용할때에는 `@include fn()` 명령어로 사용(즉, 만들때는 @mixin, 불러올때에는 @include, 여기서 fn()은 함수 이름-바꿀 수 있다.)














