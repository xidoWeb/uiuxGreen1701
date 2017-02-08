# WebStandard
> 하이퍼텍스트 마크업 언어(HTML)는 웹페이지를 만들고 보여주는데 사용됩니다. 웹 페이지의 컨텐츠를 결정짓지만, 기능을 결정하지는 않습니다.

> HTML로 글에 "마크업"을 추가할 수 있습니다. "하이퍼 텍스트"는 오늘날의 월드 와이드 웹을 특징지우는 웹페이지를 서로 연결하는 것을 의미합니다. 인터넷에 웹페이지를 만들고 올려서 월드 와이드 웹의 참여자가 될 수 있습니다. HTML은 시각적인 이미지와 다른 형태의 미디어도 지원합니다. HTML은 웹 문서의 구조와 의미를 기술하는 언어입니다. 웹 페이지의 내용은 `<img>, <title>, <p>, <div>, <picture>` 등의 HTML 요소로 표시됩니다. 이 요소들은 웹사이트를 구성하는 기초 재료입니다.

[MDN 웹표준](https://developer.mozilla.org/ko/docs/Web/HTML)
[DAUM 웹표준](http://darum.daum.net/convention/html)

___
## 웹 버전
1. html  
    * html 4.0.1
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>

```

___

  * xthml 1.0  
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```
___
  * html 5
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```
___
  * html 5.1
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```
___
2. css
    * css2
    * css3

___
## HTML5의 개념 및 특징

차세대 웹 표준으로 확정(2014년 10월 28일)되었으며, 기존 텍스트와 하이퍼링크만 표시하던 HTML이 멀티미디어 등 다양한 애플리케이션까지 표현·제공하도록 진화한 “웹 프로그래밍 언어“입니다. 예로, 오디오·비디오·그래픽 처리, 위치정보 제공 등 다양한 기능을 제공함으로써, 웹 자체에서 처리할 수 있는 기능이 대폭 향상 되었습니다.
___
### html [^1]
  * 기본 영역
  * 링크 &amp; 이미지
  * 이름지정하기
  * 외부 문서 불러오기
  * 테이블
  * 폼
  * 블록구조화(시멘틱하게)
  * video & audio
  * 조건부 주석
<!-- 
___
## 
___
### svg
___
### canvas
-->
___
## css3의 개념 및 특징

CSS3는 Cascading Style Sheets(CSS) 언어의 가장 최신 버전이고 CSS2.1을 상속하는 것을 목표로  합니다.  CSS3는 개발자들이 오랫동안 기다려온 새로운 기능들을 지원하게 되었습니다. 다중열(multi-columns), 유동적인 상자(flexible box), 격자 배치(grid layouts) 뿐만 아니라 둥그런 모서리(rounded corners), 그림자( shadows) , 부드러운 색의 변이(gradients) , 변이(transitions), 움직임(animations) 등도 지원합니다. 실험적인 부분(experimental parts)은 브라우저 공급자(vender)의 구현에 따라 다를 수 있고 미래에 문법이나 의미가 변할 수 있습니다. 따라서 환경에 따라 해당 스펙을 사용하는 것을 피하거나, 사용하더라도 매우 신중히 사용해야합니다.  
___
> 2002년 8월부터 2011년 6월까지 CSS Level2가 권장(Recommendation)단계에 이르기 까지 총 9년이 걸렸습니다. 이는 몇몇 부차적인 기능들이 전체 명세(specification)의 진행을 더디게 만들었기 때문입니다. W3C의 CSS Working Group은 문제를 일으키는 몇몇 기능을 제외한 나머지 기능들의 표준화 작업을 보다 빠르게 진행하기 위하여 Beijing doctrine에 따라 CSS를 보다 작은 컴포넌트 단위로 나눴고, 이를 모듈(module)이라 부릅니다. 현재 각각의 모듈은 서로 독립적으로 표준화 과정을 거치고 있습니다. 이미 몇몇 모듈은 W3C Rocommendations 에 이르렀으나, 나머지는 여진히 Working Drafts 단계에 머물러 있습니다. 또한 새로운 요구사항(needs)이 발생할 때 마다 계속해서 새로운 모듈이 추가되고 있습니다.
___
> CSS Modules and Snapshots as defined since CSS3공식적으로 CSS3 자체 표준은 존재하지 않습니다. 각각의 모듈이 독립적으로 표준화 되고 있고, 표준 CSS는 모듈을 통해 CSS2.1을 수정하여 상속(extends)하는 것으로 구성되어있서 항상 같은 level number를 갖는 것은 아닙니다. 특정 시점의 CSS2.1과 완성된 모듈들로 구성된 CSS표준 스냅샷을 정의할 수 있습니다. W3C는 주기적으로 이런 스냅샷을 발표하고 있습니다. (2007 / 2010)

___
### css [^2]
  * 선택자
  * size &amp; unit
  * background
  * display
  * float & clear
  * margin &amp; padding &amp; border &amp; outline
  * position
  * font
  * prefix
  * border-radius
  * transform
  * transition
  * animation
___

[^1]: html.md
[^2]: css.md
