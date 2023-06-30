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
