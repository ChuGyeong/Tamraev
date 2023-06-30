# the glory character introduction

> React를 이용한 홈페이지입니다
> [바로가기](https://chugyeong.github.io/Tamraev/dist/)를 통하여 접속하실 수 있습니다.
> 디자인 및 홈페이지 참고 [탐라는전기차](https://www.tamraev.com/)

<br>

## 1. 기술 스택

<br>

-  React
-  SCSS

<br>

## 2. 팀 소개

<br>

| [정종우](https://github.com/honeypunch97) | [추경](https://github.com/ChuGyeong) |
| ----------------------------------------- | ------------------------------------ |

## 3. 컴포넌트 구조

<br>

```
Tamraev
├──public
│    └── images
└── src
    ├── assets
    ├── components
    │    └──┬ CenteredImg.jsx
    │       ├── Error.jsx
    │       ├── Footer.jsx
    │       ├── Loading.jsx
    │       ├── Nav.jsx
    │       ├── SlideImg.jsx
    │       ├── SpriteAnimation.jsx
    │       └── SpriteAnimation.jsx
    ├── hooks
    │      └──┬── useAxios
    │         └── useInput
    ├── pages
    │      └──┬── home
    │         │    ├── CategoryMenu.jsx
    │         │    ├── ContentItem.jsx
    │         │    ├── ContentList.jsx
    │         │    ├── Contents.jsx
    │         │    ├── ContentSearch.jsx
    │         │    ├── Home.jsx
    │         │    ├── Popup.jsx
    │         │    ├── PopUpVideo.jsx
    │         │    └── Visual.jsx
    │         ├── hyundaiev
    │         │    ├── HyundaievDetail.jsx
    │         │    ├── HyundaievImg.jsx
    │         │    ├── HyundaievItem.jsx
    │         │    └── HyundaievList.jsx
    │         ├── info
    │         │    └── Info.jsx
    │         │
    │         └── noticeList
    │              ├── NoticeDetail.jsx
    │              └── NoticeList.jsx
    ├── styled
    │      └──┬── Global.js
    │         └── tamraevStyle.js
    └── App.jsx
```

<br>

## 4. 프로젝트 기간

<br>

-  2023.06.27~2023.06.27 홈페이지 구현

<br>

## 5. 시연 영상

<br>

<br>

## 6. 주요 기능

<br>

> 상세 코드는 [바로가기](https://github.com/ChuGyeong/Tamraev)에서 확인할 수 있습니다.

<br>
​
<details>
<summary>페이지</summary>
​
<!-- 공백 지우지 마세요 -->
​
<br>

## visual

​

## 부제목

​
<br>
​

```js

```

​
<br>
​
설
명
부
분
​

</details>

<br>

```


```

## 7. 프로젝트 기획 목적

<br>

-  기존 프로젝트의 개선: 이 프로젝트는 기존 [탐라는 전기차 페이지](https://www.tamraev.com/)를 리액트와 styled-component를 사용하여 재구성한 것입니다. 기존 프로젝트에서 발생한 문제점이나 한계를 극복하고, 사용자 경험을 향상시키기 위해 새로운 아키텍처를 도입하였습니다.

-  코드의 가독성과 유지보수성 향상: 기존 프로젝트의 코드를 개선하여 가독성과 유지보수성을 향상시켰습니다. 페이지와 컴포넌트를 분리하여 작업함으로써 코드의 구조를 명확히하고, 재사용 가능한 컴포넌트를 components 폴더에서 관리함으로써 중복 코드를 줄였습니다.

-  확장성과 재사용성: 프로젝트를 pages 폴더와 components 폴더로 나누어 작업하였습니다. 이렇게 구조화된 프로젝트는 향후 수정과 보완이 쉽게 이루어질 수 있으며, 새로운 기능 추가나 다른 프로젝트에도 쉽게 적용할 수 있는 장점을 가지고 있습니다.

-  사용자 정의 훅의 활용: hooks 폴더에는 useAxios와 useInput과 같은 사용자 정의 훅을 생성하였습니다. 이러한 훅은 코드의 재사용성을 높이고 개발 효율성을 향상시킬 뿐만 아니라, 코드의 일관성을 유지하고 중복된 로직을 줄이는 데 도움을 줍니다.

-  종합적으로, 이 프로젝트의 목적은 기존 프로젝트의 개선과 코드의 가독성, 유지보수성 향상, 확장성과 재사용성 강화, 사용자 정의 훅의 활용 등을 통해 더 효율적이고 유연한 개발 환경을 구축하는 것입니다.
