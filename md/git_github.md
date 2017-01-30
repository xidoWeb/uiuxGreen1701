# git & github

## git이란?
### 버전 관리 시스템(version control sytem)
**파일의 변화를 시간에 따라 기록**했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템이다.   
거의 모든 컴퓨터 파일의 버전을 관리할 수 있다.   
그래픽 디자이너나 웹 디자이너도 버전 관리 시스템을 사용할 수 있다.  

>변경 이력을 기록을 통해서 변경된 내용을 공유 가능하다.  
타인이 작업한 태용을 쉽게 병합한다.  
과거 상태로 쉽게 복구 가능하다.   
여러 분기(branch)를 이용해 병렬 관리가 가능하다.  

**즉, 관리가 용이하다.**  

### git은 여러 버전 관리 시스템(vcs) 중 하나이다.
- 복잡한 branch 관리에 적합하다  
- 심플하지만, 핵심적인 기능이 강력하다   
- 로컬 저장소와 원격 저장소가 분리되어있다   
- 속도가 빠르다   
- 서비스 업체가 다양하다  
- 보조 툴이 다양하다   

### git에서의 작업 흐름

Working Derectory - Staging Area - (git directory)Repository

### 실제 내 컴퓨터에 작업하고 있는 공간, `Working Derectory`

### Repository로 보내기 전의 대기공간 `Staging Area`
git이 변경 이력을 관리하는 부분  
Working Directory에서 git 명령어를 통해서 추가 가능  
이 곳에 올라와 있는 파일만 저장소에 추가 및, 수정 가능  
repoditory로 일단 올라가면 history를 수정할 수 없으므로, 수정은 여기에서까지만 가능하다.  
일종의 준비구역 
>ex

>```
fileA - 보안 적용
fileB - 신규 기능 추가 
fileC - 보안 적용
fileD - 보안 적용
```
의 작업한 내용이 있고 모든 내용을 전부 배포할 예정이었는데,  
'신규 기능추가'한 부분만 수정 요청이 들어온다면!!  
stage area에서 '보안 적용'만 뽑아서 올릴 수 있다.

**즉, 두 기능을 따로 commit하여 배포에서 일부 수정내용만 반영해 배포할 수 있다.   
위의 상황일때에도 별도의 백업이나 복구의 단계가 필요하지 않다!**  
(기존의 svn저장소에서는 기본적으로 수정된 '모든 파일'이 commit이 되므로,  
한번에 만들어둔 저것들 중에 신규 기능을 모두 처음 상태로 만들어두고, 보안만 남았을 때 배포하고,  
신규 기능추가한 부분은 다시 작성해서 올려야 한다고 함. 무슨짓이죠 이게;)

### 모든 것을 기록하고 흔적을 지울 수 없는 저장소`Repository`
변경 이력을 저장한 저장소  
일단 한 번 올리면 모든 것들이 기록되어 흔적을 지울 수 없다 

#### 작업하는 컴퓨터에 존재하는 Local Repository
외부에 위치하지 않고 작업하고 있는 내 컴퓨터에 존재한다   
인터넷을 이용하지 않기 때문에 속도가 매우 빠르다   
인터넷이 통하지 않는 곳에서도 사용할 수 있다   
잦은 저장소 처리요청에도 부담이 없다   
외부 저장소에 손실이 와도 로컬 저장소를 이용해 빠르게 복구할 수 있다  

#### 외부 서버에 고이 모셔져 있는 Remote Repository
전통적인 관점에서의 저장소의 개념이다  
외부 서버에 위치하여, 변경 이력을 기록한다  
인터넷을 이용해서 접근 가능하다  
**다중 사용자로부터 관리되는 각 로컬 저장소의 접점이다**

### git의 구조 정리하기
```
                              인터넷이 안돼도 사용 < | > 인터넷이 될 때 사용
WorkingDirectory  - StageArea - LocalRepository - RemoteRepository
    여기까진 아직 되돌릴 수 있어요 < | > 여기부턴 돌아올 수 없는 강을 건너게 됩니다.  
```


## git 과 github은 다른 것이다!!
위에서 본 것처럼 git은 '**버전 관리 시스템**'이고, 
github은 git의 **remote repository**를 제공해주는 서비스이다!

--
### github을 눈으로 보면서 편하게 쓸 수 있는 SourceTree를 사용해보자.
#### sourceTree
- 구글에 source tree를 검색해서 다운로드받고 설치한다  
뭐뭐 등록하라는거 있는데 그건 전무 무시하고, **atlassian 계정만 생성한다**

- 설치된 source tree를 실행 후 계정 정보를 입력한다(메뉴> 도구> 일반)  
**add an account**  
account: github  
username: github계정id  
password: password

#### github과 연동될 파일 생성하고, 연결하기
내 컴퓨터에 github과 연동할 파일을 만들고 source tree에 연결한다. 


--
### terminal을 이용해 gibhub을 이용해보자!!

#### init으로 저장소 '생성'해서 올리기
들어도 들어도 까먹는 가여운 나의 머리통을 위해 적어둬야 할 것 같다.

1. 일단, git과 연동할 폴더에 들어가준다. **`cd 폴더이름`**

2. 폴더를 들어갔다면 **`git init`**명령어를 이용해 git과 연동시켜준다. 

3. 명령어 **`vi .gitignore`**로 파일을 작성해서 무시할 파일 목록을 만들어준다.   
   [여기로 가면 파일 작성에 도움을 받은 수 있다.](https://www.gitignore.io/)

4. 만든 git `.gitignore`파일을 올려준다. **`git add -A`**명령어 사용

5. **`git status`**명령어를 입력해 `.gitignore`가 잘 올라갔는지 확인한다. 

6. 잘 올라가있으면 **`git commit`**명령어를 입력해 메시지를 달아준다.

7. 자, 이제 git 연결은끝났고, 파일or폴더를 만들어서 add시키고  
   commit을 달아서 Local repository에 올릴 수 있다.   
   github의 remote repository에 올릴 예정이라면,

8. **`git add remote [저장소별칭] [저장할github주소]`**명령어로 remote를 추가해준다. 대체로 저 별칭은 origin을 사용하는 듯 하다.

9. 연결이 잘되었는지 확인하려면 **`git remote -v`**명령어를 사용해 remote된 주소를 확인한다. 

10. 잘 연동되었으면, push와 pull을 사용해서 remote로 왔다갔다 할 수 있다. 

#### cloen으로 저장소 '복제'해서 올리기
공용 깃헙에 과제를 올려야 했는데, 까먹고 init으로 '생성'시키는 바람에 피눈물을 흘릴 뻔, 했다.  
헤메다가, 무슨 파일을 바깥에 잘못 만드는 바람에 내 과제에만!!!무언가 빈 공간이 하나 더 올라간 채로 남아있던 창피함..이제 다시 그런 실수는 하기 싫다....

1. 일단, 공용 깃을 보관할 폴더를 만들어준다.(임의로 homework라 명명함)  
  **`mkdir homework`** 
  
2. homework안으로 들어가서(이동 명령어는**`cd homework`**) 

3. **`git clone 복제시킬 github 주소`**를 적고, 동기화시켜준다.

4. github을 복제시킨 폴더로 들어가면 터미널이 git과 연동되어있음을 알려줄 것이다. 
  **`cd 복제한폴더이름`**

5. 여기에 동기화시킬 데이터(파일or폴더)를 넣어준다.(그냥 드래그 앤 드롭했다)

6. 그리고, 일단 **`git status`**명령어로 상태창을 확인해보자. 자주 열어서 확인하자.
  
7. 빨갛게 무언가 add되지 않았음을 보여주면 잘 들어간거다.

8. 이제 **`git add 올릴 폴더or파일이름`**로 staging aera에 추가 시키고, 
  
9. 올려도 별 문제없을것 같다. 싶으면 commit을 달아준다. 좋은 커밋달기를 일상화하자.  
   commit을 다는 순간 local repository에 올라가니 이젠 은폐는 불가능하다.  
  명령어는 **`git commit`** or **`git commit -m`**(간단하게 커밋달기) 

10. **`git push`**를 입력해서 이제는 remote repository에도 올려주면 된다

 따란~!!


#### git branch생성하기
저장소가 있다고 다가 아니다. branch를 이용해서 가지를 뻗어나가야만 한다.   
많이 어려우면 손으로 그리면서 차근차근 해보도록 하자

1. branch를 생성할 땐 **`git branch 브랜치이름`**을 적어서 새로운 branch를 생성해준다. 

2. branch가 잘만들어졌는지 확인한 땐 **`git branch`**명령어를 사용하고,
 
3. 다른 branch로 이동하고 싶을땐 **`git checkout 이동할 브랜치 이름`**을 적으면 이동할 수 있다. 


#### git에 자료 올리기 
Local과 Remote가 이미 연결된 상태라면, 

1. git에 연동된 폴더로 들어간다(이동 명령어는 **`cd 들어가길 원하는 폴더명`**)
 
2. **`git branch 들어가길 원하는 브랜치이름`**작업할 branch로 들어간다 
 
3. **`git pull`**명령어로 Local과 Remote를 동기화시켜준다.
 
4. 내가 원하는 파일or폴더를 **`git add 파일or폴더이름`**으로 staging aera에 추가 시킨다. 

5. 잘 올라갔는지 확인하기 위해 **`git status`**를 이용해 확인한다. 

6. 올려도 될 것 같다는 판단이 서면, **`git commit`**명령어로 올릴 내용에 관해 메모를 남기고 Local Repository에 올린다. 

7. **`git push`**명령어로 remote repository에 올린다.





#### git 명령어를 알아보자
git의 명령어는 모두 "git"이란 단어로 시작된다

> git --help를 쳤을 때 나오는 명령어들  
___
**start a working area**  

- `clone`
   + 깃저장소를 복제해서 local repository를 생성한다  
     (Clone a repository into a new directory)  
- `init`  
   + 깃 저장소를 초기화한다. 저장소나 디렉토리 안에서 이 명령을 실행하기 전까지는 그냥 일반 폴더고, 이것을 입력해야 추가적인 git 명령어등을 줄 수 있다.   
   (Create an empty Git repository or reinitialize an existing one)  

___
**work on the current change**  

- `add`
   + 작업 폴더의 파일을 git이 추적하게 하거나 commit을 위한 준비상태로 만듦  
     (Add file contents to the index)  
- `mv`
   + 파일 이동을 하거나, 이름 변경하기  
     (Move or rename a file, a directory, or a symlink)  
- `reset`
   + add로 등록한 파일은 unstaged상태로 바꿔준다  
     (Reset current HEAD to the specified state)  
- `rm`
   + 파일, 폴더를 삭제한다  
     (Remove files from the working tree and from the index)  

___
**examine the history and state**  

- `bisect`
   + 버그가 어디서 생겼는지 찾아준다  
     (Use binary search to find the commit that introduced a bug)  
- `grep`
   + 검색어가 들어가있는 파일을 찾을 수 있다  
     (Print lines matching a pattern)  
- `log` 
   + commit의 히스토리를 조회한다.  
     (Show commit logs)  
- `show`
   + 현재 HEAD의 커밋정보를 조회한다.  
     (Show various types of objects)  
- `status`  
   + 저장소(repository)의 상태를 확인한다.    
    (Show the working tree statu)  

___
**grow, mark and tweak your common history**  

- `branch`  
   + 브랜치의 리스트를 확인하거나, 새로운 브랜치를 만들거나, 그것을 지울 수 있다.  
     (List, create, or delete branches)  
- `checkout`    
   + 원하는 브랜치로 이동하게 해주는 명령어이다.  
    (Switch branches or restore working tree files)  
- `commit`  
   + Local Repository에 올리기 위해 사용한다.  
    작업한 내용에 대한 정보를 작 정리해서 적어놓는다  
    간단하게 입력하기 위해서 뒤에 `- m`을 입력할수도 있다.  
    (Record changes to the repository)  
- `diff` 
   + local과, remote작업 간의 변경 내역을 표시한다.  
     (Show changes between commits, commit and working tree, etc)   
- `merge`  
   + 현재 브랜치와 다른 브랜치를 병합할 수 있다.  
   합쳐질 branch log의 번호를 기억해두었다가, 본체가 될 branch에서 `git merge lognumber`를 적어서 병합시킨다.  
   (Join two or more development histories together)    
- `rebase` 
   + 브랜치의 변경사항을 순서대로 다른 브랜치에 적용하며 병합한다.  
     저장소의 커밋 로그와 이력을 한 줄로 정리해주므로, 
     완료된 브랜치를 마스터에 병합할 때 사용한다.  
    (Reapply commits on top of another base tip)   
- `tag`
   + 태그를 생성하고, 조회하고, 지울 수 있다   
     (Create, list, delete or verify a tag object signed  with GPG)  

___
**collaborate**  

- `fetch`
   + remote의 데이터를 모두 가져오지만 merge는 생략한다.  
     서버의 데이터를 확인하는 용도로 사용   
     (Download objects and refs from another repository)  
- `pull`  
   + 원격 repository에서 변경 사항을 다운로드한다. merge를 자동수행한다.   
     (Fetch from and integrate with another repository or a local branch)  
- `push`  
   + Local repository의 commit된 데이터를 원격 repository로 업로드시킨다.  
     (Update remote refs along with associated objects)  

___
**추가사항**

- `remote`
   + remote서버 확인
   + `remote -v`를 입력하면 remoteRepository의 주소를 알 수 있다


