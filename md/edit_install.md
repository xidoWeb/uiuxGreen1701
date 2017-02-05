# edit 사용하기(sublimetext)
[sublimetext 설치 및 사용법 이해하기_생활코딩 유투브](https://www.youtube.com/watch?v=HcgxWOvqBBY)
> 시간상 5분 45초 에서 부터 시청하시면 좀더 빠르게 설치하고 사용하는 방법을 익힐 수 있습니다.

## 설치하기전 간단한 세팅하기
단축키 실행으로인해 다양한 오류 및 기능이 실행이 되는경우가 있다.   
그중 대표적으로 노트북 화면이 돌아가는 경우(윈도우)인데 이는 노트북의 기본 세팅중의 일부단축키가 에디트와 겹침현상으로 생기는 문제이다. 이에 몇가지 기능을 수정해야한다.

___
### window
> 위에서 언급했든 가장 대표 수정단축키는 화면회전기능이다. 

#### 화면회전단축키 겹침 변경
 1. 바탕화면에서 마우스 오른버튼을 눌러 `그래픽 속성`을 클릭한다.
 2. `옵션 및 지원` 버튼을 클릭
 3. `바로가기 키 관리자` 탭에서 바로가기 키 관리를 `사용 안함`으로 체크 후 
 4. `적용`후 `닫기`

> 펑션키 설정은 브랜드 제조사 마다 다름.  
> 화면 캡쳐의 경우 **window 10** 일 경우 `win + print screen` 클릭시 이미지 메뉴에 실시간 등록처리 됨  

___
### OSX
> os가 '**요세미티**' 버전이후 **한/영** 키가 변경되었으며 기타 여러 단축키가 불편하게 세팅되었으므로 좀더 쉽게 사용할 수 있도록 변경처리

#### 한영전환 단축키 설정
1. `시스템 환경설정` 클릭
2. `입력소스` 탭에서 하단의 `Caps Lock 키로 U.S 입력 소스 전환` 체크 해제(command + space키로 전환-일부 예외)
3. `단축키` 탭에서 `입력소스` 부분의 `이전 입력소스 선택`의 단축키의 설정에따라 한/영 전환이 다를 수 있음

#### 펑션키 설정
1. `시스템 환경설정` 클릭
2. `키보드` 탭에서 **F1, F2등의 키를 표준 기능키로 사용 체크** f1~f12키를 `fn`키를 사용하지 않고 사용하도록 변경(사용자 선택)
3. **참고**: `단축키` 탭의 `스크린샷` 부분을 확인하면 화면 캡쳐방법을 찾을 수 있음! 

___
## edit 설치하기

### 기본 edit 설치
[sublimetext 설치하러가기](https://sublimetext.com/3)

### package 설치
>sublime text 사용하기 위해서는 다양한 `package`를 설치해서 사용해야 하는데 이때 필요한 기능을 별도로 설치해야 한다. <br>

[package control 설치하러 가기](https://packagecontrol.io)
#### 유용한 package

1. sidebar
2. autofileName
3. View In Browser
4. Alignment
5. REM-PX
6. color highlighter
7. color pick
8. HTML Beautify
9. javascript Beautify
10. jshint
11. Increment Selection
12. emmet

#### theme 변경하기
> 브라우저를 사용하면서 좀더 나은 환경을 세팅하게 되면서 에디트의 테마를 세팅하는 경우도 있다.   
> 개인적으로는 boxy theme를 사용하는 편이다.

[boxy theme](https://packagecontrol.io/packages/Boxy%20Theme)
[colorsublime theme](http://colorsublime.com/)
[기타 다양한 테마](https://www.longren.io/gigantic-list-of-sublime-text-themes/)


### terminal에서 사용하기
아래 내용은 서브라임텍스트를 기반으로 터미널에서 실행시에 사용하는 방법을 설명해 놓았으며 기타 다를 edit에서도 사용요령은 같다. 단, atom의 경우 기본 설치후 바로 사용할 수 있다. <br>

#### OS X 에서 실행하기

[osX](https://www.youtube.com/watch?v=P6IlgugDoGw)   <br>  


```
 ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl;
```  


위코드 입력후 터미널 재실행,  <br>  
이후 `subl . ` 입력하면 현재 경로에서 서브라임텍스트 실행 실행처리

#### window 에서 실행하기

[window](https://www.youtube.com/watch?v=vERWpzH7PBM)

___
[처음으로 돌아가기](../webReady.md)
