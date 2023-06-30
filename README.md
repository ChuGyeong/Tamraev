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
| Frontend                                  | Frontend                             |

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

[![탐라는 전기차(React ver) 시연영상](https://img.youtube.com/vi/2AA7mHFkg_g/0.jpg)](https://www.youtube.com/watch?v=2AA7mHFkg_g)

<br>

## 6. 주요 기능

<br>

> 상세 코드는 [바로가기](https://github.com/ChuGyeong/Tamraev)에서 확인할 수 있습니다.

<br>

<details>
<summary>components</summary>
​
<details>
<summary>Nav</summary>

<br>

```js
const Nav = memo(({ isMain } = false) => {
   const [isNavActive, setIsNavActive] = useState(false);
   const toggleNav = () => {
      setIsNavActive(!isNavActive);
   };
   return (
      <NavContainer line_color={isMain ? '#fff' : '#002c5f'} nav_bottom_margin={isMain ? '-120px' : '0px'}>
         <div className={`bg ${isNavActive ? 'on' : ''}`}></div>
         <i onClick={toggleNav}>
            <div className={`hamburger ${isNavActive ? 'is-active' : ''}`} id="hamburger-2">
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </i>
         <nav className="gnb">
            <h1>
               <Link to={'/'}>
                  <img src={isMain ? './images/common/logo.png' : './images/common/logo_b.png'} alt="" />
               </Link>
            </h1>
         </nav>
         <nav className={`scrollNav ${isNavActive ? 'on' : ''}`}>
            <div className="swiper-box">
               <Swiper
                  className="nav-swiper"
                  slidesPerView="1"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  noSwipingClass="swiper-no-swiping"
                  speed={10}
                  loop={true}>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_1.jpg" alt="gnb_slider_1" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_2.jpg" alt="gnb_slider_2" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_3.jpg" alt="gnb_slider_3" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_4.jpg" alt="gnb_slider_4" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_5.jpg" alt="gnb_slider_5" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_6.jpg" alt="gnb_slider_6" />
                  </SwiperSlide>
               </Swiper>
            </div>
            <div className="list-box">
               <ul>
                  <li>
                     <Link to={'/'}>HOME</Link>
                  </li>
                  <li>
                     <Link to={'/info'}>탐라는 전기차</Link>
                  </li>
                  <li>
                     <Link to={'/hyundaievList'}>전기차 소개</Link>
                  </li>
                  <li>
                     <Link to={'/noticeList'}>JEJU 전기차 관련 소식</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </NavContainer>
   );
});
```

해당 코드는 화면 상단에 메뉴를 표시하고, 햄버거 아이콘을 클릭하면 내비게이션 메뉴가 활성화되고 이미지 슬라이더가 자동으로 전환됩니다. 메뉴 항목을 클릭하면 해당 페이지로 이동하게 됩니다.  
React와 React Router를 사용하여 구현되었으며, 사용자가 웹 애플리케이션에서 내비게이션을 조작하고 다양한 기능을 활용할 수 있도록 합니다.

</details>
<details>
<summary>Nav</summary>

<br>

```js

```

</details>

</details>

<br>
​
## 7. 프로젝트 기획 목적

<br>

-  기존 프로젝트의 개선: 이 프로젝트는 기존 [탐라는 전기차 페이지](https://www.tamraev.com/)를 리액트와 styled-component를 사용하여 재구성한 것입니다. 기존 프로젝트에서 발생한 문제점이나 한계를 극복하고, 사용자 경험을 향상시키기 위해 새로운 아키텍처를 도입하였습니다.

-  코드의 가독성과 유지보수성 향상: 기존 프로젝트의 코드를 개선하여 가독성과 유지보수성을 향상시켰습니다. 페이지와 컴포넌트를 분리하여 작업함으로써 코드의 구조를 명확히하고, 재사용 가능한 컴포넌트를 components 폴더에서 관리함으로써 중복 코드를 줄였습니다.

-  확장성과 재사용성: 프로젝트를 pages 폴더와 components 폴더로 나누어 작업하였습니다. 이렇게 구조화된 프로젝트는 향후 수정과 보완이 쉽게 이루어질 수 있으며, 새로운 기능 추가나 다른 프로젝트에도 쉽게 적용할 수 있는 장점을 가지고 있습니다.

-  사용자 정의 훅의 활용: hooks 폴더에는 useAxios와 useInput과 같은 사용자 정의 훅을 생성하였습니다. 이러한 훅은 코드의 재사용성을 높이고 개발 효율성을 향상시킬 뿐만 아니라, 코드의 일관성을 유지하고 중복된 로직을 줄이는 데 도움을 줍니다.

-  종합적으로, 이 프로젝트의 목적은 기존 프로젝트의 개선과 코드의 가독성, 유지보수성 향상, 확장성과 재사용성 강화, 사용자 정의 훅의 활용 등을 통해 더 효율적이고 유연한 개발 환경을 구축하는 것입니다.
