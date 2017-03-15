# GIT

## git이란?

리누스토발즈에의해 개발된 버전관리 소프트웨어

협업사용시 또는 파일작업시 일어나는 파일간의 여러 시간적 상황적 문제들을 체크하고 관리할 수 있는 기능

___

## git 설치

1. http://github.com 가입(계정은 구글로 가입하는것을 권함)
2. http://git-scm.com  에서 설치
3. gui사용자의 경우는 별도의 gui프로그램을 설치

___

## 기본 용어

1. **커멘드라인( command line  => cli)** : 윈도우에선 **cmd**, 맥에선 **terminal** 라고 불리우며, 마우스로 사용하는것이 아닌 프롬프트화면을 이용하여 키보드 명령어를 통해 사용한다.

2. **저장소(repository):**  깃 프로젝트 작업시 데이터를 저장 할 수 있는 공간(작업공간)

3. **버전관리(version control):** 깃의 목적 파일을 사용시 겹쳐쓰거나, 어려버전으로 나뉘어서 사용할경우 시간별로 버전별로 분류하여 사용할 수있다.

4. **커밋(commit):** 깃에 자료를 올릴때 해당 부분의 삽입하는 메세지, 해당 작업시 사용되었던 내용에대해 이해할 수 있도록 설명해놓는다.

5. **브랜치(branch):** 하나의 프로젝트 사용시 여러명이 사용하거나, 버전을 별도로 분루해서 사용할경우 사용한다.(`branch`를 사용할경우 다시 메인(`master`)과 합칠경우 `merge` 기능을 사용한다.)

   ​

___

## 사용방법

1. [git](http://github.com)에서 로그인 후, 새로운 저장소를 생성(git자체를 개인사이트로 생성할 경우는 별도 참조)한다.

2. 내컴퓨터에 깃생성한 저장소와 동일한 이름의 폴더를 생성한다.

3. 해당 폴더에서 **terminal**(window 에서는 **git-bash**)을 실행 한다.

4. git이 설치되었는지 확인한다. 

   ```git
   git
   ```

   ​

5. **git init:** 내컴퓨터의 깃 계정을 사용할차례이니 이제 깃을 사용할 수 있도록 기초세팅한다(초기화)

   ```git
   git init
   ```

   ​

6. **git config:** 'configure'의 줄임말로, 처음 깃을 설정할때 

   ``` git
   git config --global user.name 사용자이름
   git config --global user.email 사용자이메일
   ```

7. 내용을 작업한다.(md파일이든 html문서든 작업한다.)

8. **git status : **

9. **git add :  **

10. **git commit : **

11. **git push :**

12. **git pull : **

13. **git clone:** git에서 생성한 repository를 내컴퓨터에 저장할 때 사용(기존에 내용이 많다면)

    ```git
    git clone git계정주소.git
    ```

14. **git branch :**

15. **git checkout**

16. **git tag**

17. **git remote add 이름 저장소주소**

