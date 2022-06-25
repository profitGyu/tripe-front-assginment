# Frontend Homework #3

[🎉 배포주소](https://triple-gyu.netlify.app/)
<br>


## 1. 프로젝트 실행 방법
 1. git 레포지토리 클론

 ```
    git clone https://github.com/silent10z/tripe-front-assginment.git
 ```
 
 2. dependencies 설치

 ```
    npm install
 ```

 3. 실행

 ```
    npm start
 ```

## 2. 사용한 기술과 선택한 이유

### 기술 스택
TypeScript, React, Styled Components

### 선택 이유

- TypeScript
    - 정적 타입을 통하여 사전에 오류 포착할 수 있는 장점이 있어서
    - 명시적 타입 지정을 통하여 가독성을 높일 수 있기 때문에

- Styled Components
    - prop를 넘겨 줄수 있는 장점이 있어서
    - ts요소들을 활용 할 수 있기 때문에

    



### 


## 3. 요구사항

- [x] 문구, 이미지의 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다. 단,
반응형 레이아웃은 고려하지 않습니다. 최소 화면 폭을 1200px로 고정합니다.

- [x]  좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다

- [x]  살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을
적용해야 합니다.

- [x]  등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은
100ms입니다.

- [x] 숫자가 올라가는 애니메이션
    - [x] 각 숫자는 0부터 시작합니다.
    - [x] 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
    - [x]  증가 속도가 느려지는 효과를 구현해야 합니다.


## 4. 어려웠던점

### 4-1. Styled Components
기존에 scss를 사용하고 있었지만, 회사 기술 스택에 Styled Components가 존재하여 처음으로 사용 해 봤기 때문에 적응하는데 시간이 좀 걸렸다. <br>
사용해보니 props를 전달, ts파일에서 적용할 수 있는 interface, import 등을 적절하게 활용할 수 있는 장점이 있는 것 같다.

### 4-2. RollingNum (숫자 증가 애니메이션)
처음 구연 할 때 단순히 setInterval을 활용하여 증가 애니매이션을 구현 하였는데 매끄럽게 숫자가 증가 하지 않고 증가 속도가 느려지는 효과를 구현하는 부분에서 어려움이 있었다. <br>
퍼센티지 형식으로 easeOutExpo, cancelAnimationFrame적용 하여 구현할 수 있었다.

