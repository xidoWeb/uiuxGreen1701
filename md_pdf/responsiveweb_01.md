# responsive web
___
## mobile first

___
## 화면 해상도
___
### device 해상도(가로)
1. 최소크기: 280px
1. mobile(세로형): 480px
2. mobile(가로형): 640px
3. tablet(세로형)
    - 안드로이드: 600px
    - 아이폰: 768px
4. tablet(가로형)
    - 안드로이드: 1200px
    - 아이패드: 1024px  
5. pc(최소크기): 1024px(17/19인치모니터)
6. pc(국제표준): 1366px
7. pc(국내표준): 1920px
8. pc(보편화된 대형): 2560px

___
### media query(기준사이즈)
1. mobile: 480px
2. tablet: 600px
3. pc:  1024px
4. pcFull: 1920px

___
### media query(종류)
1. `@media`
2. 인쇄:  `@media print`(cm, mm, pt)
3. 화면:  `@media screen`(px, rem, em, pt, %)
4. 전체: `@media all`
5. `@media screen and`
6. 최소크기: `@media screen and (min-width:480px) {/*css코드*/}`
7. 최대크기: `@media screen and (max-width:600px) {/*css코드*/}`


___
### media query(코드)
1. 모바일(세로형)`~480`
    - `@media screen and (max-width:480px) { }`
2. 모바일(가로형)`481~768`
	- `@media screen and (min-width:481px) and (max-width:768px) {}`
3. 타블렛 `768~1024`
    - `@media screen and (min-width:768px) and (max-width:1024px) {}`
5. pc(기본)
    - `@media screen and (min-width:1025px) and (max-width:1366px) {}`
6. pc(full)
	- `@media screen and (min-width:1367px) {}`

___
### media query(코드수정_축소)
1. 모바일`~599`
    - `@media screen and (max-width:599px) { }`
2. 태블릿`601~1023`
	- `@media screen and (min-width:600px) and (max-width:1023px) {}`
5. pc(기본)
    - `@media screen and (min-width:1024px) {}`

___



