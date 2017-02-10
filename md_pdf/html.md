___
# html

___
## 구조화하기 1
___
  ### 기본 영역  
#### 제목을 표시하는 방법
`h$` : 1~6까지 존재

```html
<h1>가장 중요하고, 한번만(하나의 웹페이지) 사용 가능<h1>
<h2>두번째로 중요한 의미, h1의 하위 레벨의 의미 <h2>
<h3>세번째로 중요한 의미, h2의 하위 레빌<h3>
<h4>네번째로 중요한 의미, h3의 하위 레빌 <h4>
<h5>다섯번재로 중요한 의미, h4의 하위 레빌 <h5>
<h6>여섯번째 이자 가장 작은 단위의 영역 제목, h5의 하위 레빌 <h6>
```

`p`: 내용(문단)
`br`: 내용에서 줄을 바꾸는 기능

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nulla facere fugit,<br /> deleniti molestiae repellendus, excepturi sequi dicta quam fugiat nostrum dolorem voluptatem sed magni aut quos doloribus, laborum repudiandae.</p>
```

`hr`: 눈에는 라인이 형성, 실제의 의미는 내용(화재)전환
```html
<p>Lorem ipsum fugiat nostrum dolorem voluptatem sed magni aut quos doloribus, laborum repudiandae.</p>
<p>Lorem ipsum fugiat nostrum dolorem voluptatem sed magni aut quos doloribus, laborum repudiandae.</p>

<hr />			<!--  위내용과의 분리역할 -->

<p>Lorem ipsum fugiat nostrum dolorem voluptatem sed magni aut quos doloribus, laborum repudiandae.</p>
<p>Lorem ipsum fugiat nostrum dolorem voluptatem sed magni aut quos doloribus, laborum repudiandae.</p>

```

___
	### list
___
  ### 그룹: 의미는 특별하게 없고, 영역을 뜻한다.
`div`: block 형식
`span`: inline 형식

**inline**
* inline 형식은 block 형식을 감쌀수 없다.
* 나열만 가능하다
*	기본적으로 사이즈를 가질 수 없다(일부 예외).

**block**
* inline형식을 감쌀수 있다, block형태도 감쌀 수 있다.
* 쌓여서 설정된다
* 크기를 가질 수 있다.

**inline-block**
* 사이즈를 가진다.
* 나열이 된다.
* 기본 속성은 inline을 따른다.

___
  ### 링크 &amp; 이미지
	`a`: 앵커라고도한다. 기본속성 `href`를 가진다. 
	`img`: 이미지를 담는 태그(요소). 기본속성 `src`, `alt`
	
	** 요소노드(element):태그, 속성노드, 텍스트노드를 모두 일컫는다.
___ 
  ### 이름지정하기
	`id`: 한번만 지정한다, 연결의 의미, css에서 #으로 앞에 표기
	`class': 여러번 사용 가능하다, css에서 .으로 앞에 표기
___
  ### 외부 문서 불러오기
___
  ### 테이블
___
  ### 폼
  
___
## 구조화하기 2
___
  ### 블록구조화(시멘틱하게)
___
  ### video & audio
  
___
## etc
___
  ### meta
___
  ### entity code
___
  ### 조건부 주석
  
<!-- 
___
## 
___
### svg
___
### canvas
-->


___
[처음으로 돌아가기](./webStandard.md)