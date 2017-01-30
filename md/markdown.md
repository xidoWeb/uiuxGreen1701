# markdown

> 마크다운 (Markdown)은 마크업 언어의 일종으로, 존 그루버(John Gruber)와 아론 스워츠(Aaron Swartz)가 만들었다. 읽기도 쓰기도 쉽다는 장점이 있다. 그루버는 마크다운으로 작성한 문서를 HTML로 변환하는 펄 스크립트도 만들었다. 확장자는 `.md`를 쓴다.<br>
> 본 문서는 [github](https://github.com)에서 주로 사용할 수 있는 코드 위주로 사용되었다. 

### 마크다운 사용 에디트
> 웹문서 편집기에서도 사용가능하지만 처음 사용하는 분들에게 전용 에디트를 권장. <br>

[win/osx - typora](https://typora.io/): 결과물과 코드의 내요을확인하기에는 조금 불편할 수 있으나 간편하게 사용할 수 있다.<br>
[win/osx - haroopad](http://pad.haroopress.com/): 한글로 만들어진 문서 편집기(약간의 오류가 발생함)<br>
[win/osx - marp](https://yhatt.github.io/marp/): `___`표기로인해 프리젠테이션 기능을 빠르게 구현할 수 있는 장점.<br>
[osx - macdown](https://macdown.uranusjr.com/): osx 에서 주로 사용하는 에디트. <br>



---
## 제목(html의 `<h>`)

`# 텍스트`

`#`을 써서 html의 `<h1>`와 같은 방식으로 제목을 표현할 수 있다. 
`<h1>`~`<h6>` 까지가 있으므로 `#`도 6개까지 사용해서 제목을 표현하고,
`#`하나면 `<h1>`, `##`이면 `<h2>`를 의미하게 된다. 

```
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

# h1

## h2

### h3

#### h4

##### h5

###### h6

---
## 리스트관련

#### 번호 없는(순서없는) 리스트
-/+/* 텍스트

~~~
- 하나
- 둘
- 셋
~~~
- 하나
- 둘
- 셋


~~~
+ 하나
+ 둘
+ 셋
~~~
+ 하나
+ 둘
+ 셋

~~~
* 하나
* 둘
* 셋
~~~
* 하나
* 둘
* 셋

이런 방식으로도 쓸 수 있다.(목록 내 새로운 목록) <br>

```
- 하나
 + 둘
   * 셋
```
- 하나
	+ 둘
		* 셋



#### 번호 있는 리스트
숫자. 리스트

```
1. 하나
2. 둘 
3. 셋
```

1. 하나
2. 둘
3. 셋

앞에 달리는 숫자와 관계없이 순서대로 나타낸다.<br>

```
1. 하나
1. 둘 
1. 셋
```

1. 하나
2. 둘
3. 셋

---
## 글꼴관련

#### 기울인 글씨 (html의 `<em>`)

```
*텍스트* or _텍스트_
```
 *텍스트* or _텍스트_

#### 굵은글씨 (html의 `<strong>`)

```
**텍스트** or __텍스트__
```
**텍스트** or __텍스트__

#### 취소선(일부만 적용)
```
~~텍스트~~
```
~~텍스트~~

#### 밑줄(일부만 적용)
```
++텍스트++
```
++텍스트++

---
## 인용
```
> 텍스트
```
> 텍스트
인용문안에 인용문을 넣으려면 `>`를 더 추가해주면 된다.

> 문단을 두 개로 나누려면 한 줄의 공백을 주고 다시 >를 사용해 작성한다.
> > 인용은 이런 식으로도 사용할 수 있다. <br>
> > **다른 마크다운 요소**를 사용할 수 있다.

---
## 링크걸기

#### 인라인 링크
```
[텍스트](링크주소)
```

[마크다운 참조](http://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/)

#### 참조 링크
```
[텍스트][참조 1]			// 인덱스 형식일경우 별도로 지정해서 사용할 수 있다.(아래참조1에 링크)
[텍스트][참조 2]			// 인덱스 형식일경우 별도로 지정해서 사용할 수 있다.(아래참조2에 링크)

[참조 1]: 링크주소 		// 위 인덱스 형식으로 별도 지정해서 사용(일부 변수형식으로 지정처리되기도 함)
[참조 2]: 링크주소 		// 위 인덱스 형식으로 별도 지정해서 사용(일부 변수형식으로 지정처리되기도 함)
```

[마크다운 참조1][참조 1]
[마크다운 참조2][참조 2]
[참조 1]: http://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/
[참조 2]: http://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/

#### 이미지
```
![텍스트](이미지링크)
```

![이미지보기](http://postfiles15.naver.net/20160112_158/qwe6331710_1452603936430xpPk9_PNG/%C1%A6%B8%F1.png?type=w1)
~~스핑 보세요! 꼭 보세요!! 두번 보세요!!~~
[출처:꽁뚱이님의 블로그](http://blog.naver.com/PostView.nhn?blogId=qwe6331710&logNo=220595601043)

___
## table
보기에는 편하나 실제로 구현하거나 작성하기 어렵기에 많이 사용하지는 않음<br>

```
|              | table                |              |
|--------------|----------------------|--------------|
| First Header | Second Header        | Third Header |
| ------------ |     ------------     | ------------ |
|    Content   |       **Cell**       |     Cell     |
|    Content   |      *Long Cell*     |     Cell     |
|              |                      |              |
|   And more   | With an escaped '\|' |              |
[Prototype table]
```
|              | table                |              |
|--------------|----------------------|--------------|
| First Header | Second Header        | Third Header |
| ------------ |     ------------     | ------------ |
|    Content   |       **Cell**       |     Cell     |
|    Content   |      *Long Cell*     |     Cell     |
|              |                      |              |
|   And more   | With an escaped '\|' |              |
[Prototype table]

```
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l"></th>
    <th class="tg-yw4l">table</th>
    <th class="tg-yw4l"></th>
  </tr>
  <tr>
    <td class="tg-yw4l">First Header</td>
    <td class="tg-yw4l">Second Header</td>
    <td class="tg-yw4l">Third Header</td>
  </tr>
  <tr>
    <td class="tg-baqh">------------</td>
    <td class="tg-baqh">------------</td>
    <td class="tg-baqh">------------</td>
  </tr>
  <tr>
    <td class="tg-baqh">Content</td>
    <td class="tg-baqh">**Cell**</td>
    <td class="tg-baqh">Cell</td>
  </tr>
  <tr>
    <td class="tg-baqh">Content</td>
    <td class="tg-baqh">*Long Cell*</td>
    <td class="tg-baqh">Cell</td>
  </tr>
  <tr>
    <td class="tg-baqh"></td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">And more</td>
    <td class="tg-baqh">With an escaped '\|'</td>
    <td class="tg-baqh"></td>
  </tr>
</table>
```
> 코드의 이해를 위해 HTML 작성을 권장 <br>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l"></th>
    <th class="tg-yw4l">table</th>
    <th class="tg-yw4l"></th>
  </tr>
  <tr>
    <td class="tg-yw4l">First Header</td>
    <td class="tg-yw4l">Second Header</td>
    <td class="tg-yw4l">Third Header</td>
  </tr>
  <tr>
    <td class="tg-baqh">------------</td>
    <td class="tg-baqh">------------</td>
    <td class="tg-baqh">------------</td>
  </tr>
  <tr>
    <td class="tg-baqh">Content</td>
    <td class="tg-baqh">**Cell**</td>
    <td class="tg-baqh">Cell</td>
  </tr>
  <tr>
    <td class="tg-baqh">Content</td>
    <td class="tg-baqh">*Long Cell*</td>
    <td class="tg-baqh">Cell</td>
  </tr>
  <tr>
    <td class="tg-baqh"></td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">And more</td>
    <td class="tg-baqh">With an escaped '\|'</td>
    <td class="tg-baqh"></td>
  </tr>
</table>

---
## 기타기능
#### 수평선
**`-`**, **`*`**, **`_`**을 세개 이상 나열

`---`

---

`***`
***

`___`
___


---
#### 코드

\`코드 내용\`<br>
`코드 내용`


\`\`\`
코드 블럭
\`\`\`

```
코드 블럭
```

`space bar`를 4번 이상 치거나,  
`tap`키를 이용해 코드 블럭을 작성할 수도 있다.
하지만, 눈에 명확하게 보이지 않으므로 추천하지는 않는다.

`tap` or `space bar`코드 블럭

	 코드 블럭
	 
___
#### 줄바꿈
기본적으로 `space bar` 두번 또는 키보드 엔터를 누르면 되지만  
코드와 함께 사용하거나 여러줄 작성하다보면 제대로 동작하지 않는 경우가 많다.  
그래서 `space bar`두번 누르고 엔터를 같이 사용해서 줄바꿈으로 처리하거나(이것도 오류가 많음)
HTML코드인 `<br>`을 사용해 강제 줄바꿈 처리를 한다.

___
#### 주석
내용을 작성하다 일부 주석처리(숨김) 하는 일이 있다면.  HTML작성시의 주석처리하는 것을 권장  

```
	내용을 작성  
	
	<!--   
	주석처리할 내용작성
	여러줄이어도 상관없으나
	전,후 줄바꿈처리 할 것을 권장 
	-->
	  
	주석이후 내용을 다시 보이게함
```

내용을 작성<br>

<!--   
주석처리할 내용작성
여러줄이어도 상관없으나
전,후 줄바꿈처리 할 것을 권장 
-->

주석이후 내용을 다시 보이게함




