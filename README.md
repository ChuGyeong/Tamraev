# **Tamraev**

> React를 이용한 홈페이지입니다.  
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
| :---------------------------------------: | :----------------------------------: |
|                 Frontend                  |               Frontend               |

<br>

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

> 상세 코드는 [바로가기](https://github.com/ChuGyeong/Tamraev/tree/main/src)에서 확인할 수 있습니다.

<br>
<details>
<summary>App</summary>

<br>

```js
import React from 'react';
import GlobalStyle from './styled/Global';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Info from './pages/info/Info';
import NoticeList from './pages/noticeList/NoticeList';
import NoticeDetail from './pages/noticeList/NoticeDetail';
import Home from './pages/home/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './components/Error';
import HyundaievList from './pages/hyundaiev/HyundaievList';
import HyundaievDetail from './pages/hyundaiev/hyundaievDetail';
import HyundaievImg from './pages/hyundaiev/HyundaievImg';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="info" element={<Info />} />
               <Route path="noticeList" element={<NoticeList />} />
               <Route path="noticeDetail">
                  <Route index element={<Error />} />
                  <Route path=":noticeID" element={<NoticeDetail />} />
               </Route>
               <Route path="hyundaievList" element={<HyundaievList />} />
               <Route path="hyundaievDetail">
                  <Route index element={<Error />} />
                  <Route path=":hyundaievID" element={<HyundaievDetail />} />
               </Route>
               <Route path="hyundaievImg">
                  <Route index element={<Error />} />
                  <Route path=":hyundaievImgID" element={<HyundaievImg />} />
               </Route>
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
};

export default App;
```

위의 코드는 React를 사용하여 구현된 애플리케이션의 라우팅 및 컴포넌트 구조를 정의한 App 컴포넌트입니다.  
애플리케이션은 React Router를 사용하여 페이지 간의 라우팅을 처리합니다. 각 경로에 해당하는 컴포넌트가 렌더링되며, 이를 통해 사용자가 해당 페이지를 볼 수 있습니다.  
이 애플리케이션은 각 경로에 따라 해당 컴포넌트를 렌더링하여 다양한 페이지를 제공하며, `<Nav>`와 `<Footer>`를 통해 일관된 내비게이션과 푸터를 유지합니다.

<br>

</details>
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
<summary>SpriteAnimation</summary>

<br>

```js
import React, { useState, useRef, memo } from 'react';

const SpriteAnimation = memo(({ url, imgW, spriteW, animationSpeed }) => {
   const [likePosition, setLikePosition] = useState(0);
   const spriteWidth = spriteW;
   const spriteHeight = 76;
   const spriteCount = Math.floor(imgW / spriteWidth);
   const animationRef = useRef(null);

   const startAnimation = () => {
      if (!animationRef.current) {
         setLikePosition(0);
         animate();
      }
   };

   const animate = () => {
      let currentPosition = likePosition;
      let previousTime = performance.now();

      const frame = currentTime => {
         const deltaTime = currentTime - previousTime;

         if (deltaTime >= animationSpeed) {
            currentPosition -= spriteWidth;
            previousTime = currentTime;
         }

         if (currentPosition <= -(spriteCount * spriteWidth)) {
            currentPosition = 0;
            setLikePosition(currentPosition);
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
         } else {
            setLikePosition(currentPosition);
            animationRef.current = requestAnimationFrame(frame);
         }
      };

      animationRef.current = requestAnimationFrame(frame);
   };

   return (
      <div
         style={{
            width: spriteWidth,
            height: spriteHeight,
            background: `url(${url}) ${likePosition}px 0`,
         }}
         onClick={startAnimation}
      />
   );
});

export default SpriteAnimation;
```

해당 컴포넌트는 팝업창 like-button에 사용되었으며, 주어진 이미지 스프라이트 시트에서 애니메이션을 생성하고 제어할 수 있습니다.  
사용자가 컴포넌트를 클릭하면 애니메이션이 시작되고, 지정된 속도로 이미지의 위치가 변경됩니다. 애니메이션이 끝나면 다시 처음으로 돌아갑니다.

</details>
<details>
<summary>SlideImg</summary>

<br>

```js
import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import './styles.scss';

const SlideImg = memo(({ slideimgUrl }) => {
   return (
      <div className="slideBox">
         <Swiper
            className="outBtnSwiper"
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
            {slideimgUrl.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <img src={item} alt="" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
});
```

이미지 슬라이드 컴포넌트입니다. 이 컴포넌트는 Swiper 라이브러리를 사용하여 이미지 슬라이드 기능을 제공합니다.  
컴포넌트에 전달되는 slideimgUrl 배열에는 슬라이드에 표시할 이미지 URL이 포함됩니다.  
슬라이드 컴포넌트는 마우스 휠, 키보드 등 다양한 방법으로 슬라이드를 탐색할 수 있도록 설정되어 있습니다. 슬라이드 내비게이션 및 페이지네이션 요소도 함께 제공되어 사용자가 슬라이드를 쉽게 제어할 수 있습니다.

</details>

<br>

</details>
<details>
<summary>hooks</summary>

<br>

<details>
<summary>useAxios</summary>

<br>

```js
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = (url = []) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      axios
         .get(url)
         .then(res => {
            setData(res.data);
            setLoading(true);
            setError(null);
         })
         .catch(error => {
            setData([]);
            setLoading(false);
            setError('주소를 찾을 수 없습니다');
         });
   }, [url]);

   return { data, loading, error };
};
```

위의 코드는 React 컴포넌트에서 API 요청을 처리하기 위한 useAxios 커스텀 훅입니다. 이 훅은 지정된 URL로부터 데이터를 가져오고, 로딩 상태와 오류를 관리하는 데 사용됩니다.

해당 훅은 다음과 같은 기능을 제공합니다.

url: API 요청을 보낼 URL을 전달 받습니다. 기본값은 빈 배열([])입니다.
data: API 요청으로부터 받은 데이터를 저장하는 상태 변수입니다.
loading: API 요청이 진행 중인지를 나타내는 상태 변수입니다.
error: API 요청 중 발생한 오류 메시지를 저장하는 상태 변수입니다.
useEffect 훅을 사용하여 컴포넌트가 마운트되거나 url이 변경될 때 API 요청을 수행합니다. axios를 사용하여 GET 요청을 보내고, 성공적으로 데이터를 받은 경우 setData를 통해 상태를 업데이트합니다. 로딩 상태를 true로 설정하고, 오류 상태를 null로 설정합니다.

API 요청이 실패한 경우 catch 블록에서 오류 상태를 업데이트합니다. 데이터를 빈 배열([])로 설정하고, 로딩 상태를 false로 설정합니다. 오류 메시지는 '주소를 찾을 수 없습니다'로 설정됩니다.

마지막으로, data, loading, error를 반환하여 컴포넌트에서 이 값을 활용할 수 있도록 합니다. 이를 통해 API 요청 결과를 화면에 표시하거나 로딩 상태를 기반으로 스피너를 표시하는 등의 작업을 수행할 수 있습니다.

</details>
<details>
<summary>useInput</summary>

<br>

```js
import { useCallback, useState } from 'react';

export const useInput = (initialState = {}) => {
   const [state, setState] = useState(initialState);

   const changeInput = useCallback(
      e => {
         const { value, name } = e.target;
         setState({ ...state, [name]: value });
      },
      [state],
   );
   return { state, changeInput, setState };
};
```

위의 코드는 React 컴포넌트에서 사용자 입력을 처리하기 위한 useInput 커스텀 훅입니다. 이 훅은 입력 상태를 관리하고, 입력 값이 변경될 때 상태를 업데이트하는 데 사용됩니다.

해당 훅은 다음과 같은 기능을 제공합니다.

initialState: 입력 상태의 초기값을 전달받습니다. 기본값은 빈 객체({})입니다.
state: 입력 상태를 저장하는 상태 변수입니다.
changeInput: 입력 값이 변경될 때 호출되는 콜백 함수입니다.
setState: 상태를 업데이트하는 함수입니다.
useState 훅을 사용하여 초기값을 기반으로 state 상태 변수를 설정합니다.

changeInput 함수는 useCallback 훅을 사용하여 메모이제이션된 콜백 함수를 생성합니다. 이 함수는 이벤트 객체(e)를 전달받아 해당 입력 필드의 값을 추출하고, 상태를 업데이트합니다. 이 때, 기존 상태를 스프레드 연산자(...)를 사용하여 복사하고, 변경된 입력 필드의 값을 업데이트합니다.

setState 함수는 상태를 업데이트하는 함수로, 필요에 따라 직접 호출하여 상태를 업데이트할 수 있습니다.

마지막으로, state, changeInput, setState를 반환하여 컴포넌트에서 이 값을 활용할 수 있도록 합니다. 이를 통해 입력 필드의 값과 상태를 연동하고, 이벤트 핸들러와 함께 사용하여 입력 값의 변화를 감지하고 상태를 업데이트할 수 있습니다.

</details>

<br>

</details><details>
<summary>pages</summary>

<br>

<details>
<summary>home</summary>

<br>

## Home

<br>

```js
const Home = memo(() => {
   const {
      data: dataList,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/12780e33b46e459942d09db7faaa58e3e5631758/tamraev.json',
   );
   const [data, setData] = useState(dataList || []);
   const [menus, setMenus] = useState([
      { id: 1, eng: 'PopularContent', kor: '인기 콘텐츠', isChk: true },
      { id: 2, eng: 'IntroductionToElectricVehicles', kor: '전기차 소개', isChk: false },
      { id: 3, eng: 'smartElectricCarTrip', kor: '슬기로운 전기차 여행', isChk: false },
      { id: 4, eng: 'ChargingAndTroubleshooting', kor: '충전 및 문제 대처법', isChk: false },
      { id: 5, eng: 'FAQ', kor: 'FAQ', isChk: false },
   ]);
   const [itemNumInPage, setItemNumInPage] = useState(6);
   useEffect(() => {
      if (dataList) {
         setData([...dataList].sort((a, b) => b.like - a.like));
      }
   }, [dataList]);

   const [isPopUp, setIsPopUp] = useState(false);
   const [popUpItem, setPopUpItem] = useState({});

   const onPopUp = item => {
      setIsPopUp(true);
      setPopUpItem(item);
   };

   //  좋아요
   const onLike = id => {
      setData(data.map(item => (item.id === id ? { ...item, like: item.like + 1 } : item)));
   };
   useEffect(() => {
      if (popUpItem.id) {
         setPopUpItem(...(data.filter(item => item.id === popUpItem.id) || []));
      }
   }, [data]);
   //  검색어로 검색
   const onSearch = text => {
      setData(dataList.filter(item => item.title.includes(text)));
   };

   //  카테고리 변경
   const changeCategory = id => {
      setMenus(menus.map(item => (item.id === id ? { ...item, isChk: true } : { ...item, isChk: false })));
      setItemNumInPage(6);
   };

   //  카테고리 변경에 따른 데이터 변경
   useEffect(() => {
      const curCategory = menus.find(item => item.isChk === true).eng;
      if (curCategory === 'PopularContent') {
         setData([...dataList].sort((a, b) => b.like - a.like));
      } else {
         setData(dataList.filter(item => item.categories === curCategory).sort((a, b) => b.id - a.id));
      }
   }, [menus]);

   return (
      <div>
         {!loading && data ? (
            <Loading />
         ) : (
            <>
               <Nav isMain={true} />
               <Visual />
               <Contents
                  data={data}
                  onPopUp={onPopUp}
                  menus={menus}
                  changeCategory={changeCategory}
                  onSearch={onSearch}
                  itemNumInPage={itemNumInPage}
                  setItemNumInPage={setItemNumInPage}
               />
               {isPopUp && <Popup popUpItem={popUpItem} setIsPopUp={setIsPopUp} onLike={onLike} data={data} />}
            </>
         )}
         {error && <Error />}
      </div>
   );
});
```

Home 컴포넌트에서는 가져온 데이터를 Contents 컴포넌트로 전달하여 컨텐츠 목록을 출력합니다.  
Contents 컴포넌트에서는 팝업으로 선택한 컨텐츠의 상세 정보를 출력하여 조회 및 좋아요 처리를 할 수 있습니다. 좋아요 기능 처리를 위해 localStorage를 사용하고 있습니다.  
또한 검색창에서 키워드를 입력한 경우 해당 내용으로 필터링하여 출력하게 됩니다.
이외에도 에러 발생 시와 로딩 중일 때 동작을 제어하기 위한 Error, Loading 컴포넌트가 있습니다.  
이렇게 각각 독립적으로 작동하는 컴포넌트들을 조합하여 Home 컴포넌트를 완성합니다.

<br>

## Visual

<br>

```js
const Visual = memo(() => {
   return (
      <VisualContainer>
         <Swiper
            className="visual-swiper"
            slidesPerView="1"
            direction={'vertical'}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            speed={10}
            loop={true}
            onSlideChange={() => {}}>
            <SwiperSlide>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_1.jpg" alt="main_slider_1" />
            </SwiperSlide>
            <SwiperSlide>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_2.jpg" alt="main_slider_2" />
            </SwiperSlide>
            <SwiperSlide>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_3.jpg" alt="main_slider_3" />
            </SwiperSlide>
         </Swiper>
      </VisualContainer>
   );
});
```

이 코드는 Visual 컴포넌트를 생성하는데, 여기에서 Swiper 라이브러리를 사용하여 이미지 슬라이드쇼를 만듭니다.  
각 슬라이드에는 이미지와 함께 타이틀과 설명 텍스트가 들어가 있습니다. 설정된 옵션으로 인해 슬라이드쇼는 자동으로 진행되며 사용자가 페이지 번호를 클릭하면 원하는 슬라이드로 이동할 수도 있습니다. Swiper 컴포넌트에 설정된 옵션들 덕분에 이미지 슬라이드쇼가 세로 방향으로 슬라이딩되고 자동 재생은 4초마다 이미지가 바뀌게 됩니다. 마지막 이미지 다음에는 다시 첫번째 이미지로 돌아와서 연속된 이미지 슬라이딩 효과를 제공합니다.  
그리고 사용자와 상호작용(예를 들어 사진을 클릭하여)할 때에도 이미지 슬라이드쇼가 정지되지 않습니다. 이 세팅으로 사용자들은 스스로 원하는 이미지나 정보를 찾아보고 사용할 수 있게 됩니다. 결론적으로 이 Visual 컴포넌트는 Swiper 라이브러리를 활용해 이미지 슬라이드쇼를 구현하고 있으며, 슬라이드들을 자동으로 전환하고 루프형태로 반복하여 사용자에게 간편한 UI를 제공하고자 하는 것입니다.

<br>

## CategoryMenu

<br>

```js
const CategoryMenu = memo(({ menus, changeCategory, onSearch }) => {
   const [isSearch, setIsSearch] = useState(false);

   return (
      <ContentMenu>
         <h3>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h3>
         <ul>
            {menus.map(item => (
               <li key={item.id} className={item.isChk ? 'on' : ''} onClick={() => changeCategory(item.id)}>
                  {item.kor}
               </li>
            ))}
            <li>
               <Link to={'/hyundaievList'}>전기차 목록</Link>
            </li>
            <li>
               <Link to={'/noticeList'}>제주 전기차 뉴스</Link>
            </li>
            <li>
               <button onClick={() => setIsSearch(!isSearch)}>
                  {isSearch ? <i className="xi-close"></i> : <i className="xi-search"></i>}
                  {isSearch ? '닫기' : '검색'}
               </button>
            </li>
         </ul>
         {<ContentSearch isSearch={isSearch} onSearch={onSearch} />}
      </ContentMenu>
   );
});
```

menus 배열을 사용하여 카테고리 항목들을 생성하고, 각 항목을 클릭하면 changeCategory 함수를 호출합니다.  
조건부 렌더링을 사용하여 검색 UI를 생성하고, 검색 버튼을 클릭하면 UI를 토글합니다.  
ContentSearch 컴포넌트를 사용하여 검색 기능의 UI를 구성하며, isSearch 상태와 onSearch 함수를 전달합니다.

<br>

## ContentList & ContentItem

<br>

```js
const CategoryMenu = memo(({ menus, changeCategory, onSearch }) => {
   const [isSearch, setIsSearch] = useState(false);

   return (
      <ContentMenu>
         <h3>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h3>
         <ul>
            {menus.map(item => (
               <li key={item.id} className={item.isChk ? 'on' : ''} onClick={() => changeCategory(item.id)}>
                  {item.kor}
               </li>
            ))}
            <li>
               <Link to={'/hyundaievList'}>전기차 목록</Link>
            </li>
            <li>
               <Link to={'/noticeList'}>제주 전기차 뉴스</Link>
            </li>
            <li>
               <button onClick={() => setIsSearch(!isSearch)}>
                  {isSearch ? <i className="xi-close"></i> : <i className="xi-search"></i>}
                  {isSearch ? '닫기' : '검색'}
               </button>
            </li>
         </ul>
         {<ContentSearch isSearch={isSearch} onSearch={onSearch} />}
      </ContentMenu>
   );
});

const ContentItem = memo(({ item, onPopUp }) => {
   const { imgUrl } = item;
   return (
      <ContentItemList onClick={() => onPopUp(item)}>
         <img src={imgUrl} alt="" />
      </ContentItemList>
   );
});
```

### **ContentList**

data 배열을 사용하여 컨텐츠 목록을 생성합니다.  
itemNumInPage 상태를 사용하여 현재 페이지에 표시할 목록의 개수를 지정합니다.  
ContentItem 컴포넌트를 사용하여 각 목록 항목을 렌더링합니다.  
itemNumInPage 상태의 변경 함수인 setItemNumInPage를 전달받아 액션 함수를 생성하고, 더보기 버튼 클릭(onClick) 시 해당 액션 함수를 호출하여 목록 개수를 늘립니다.

<br>

### **ContentItem**

item 객체를 사용하여 컨텐츠 항목을 생성합니다.  
imgUrl 속성을 사용하여 각 컨텐츠 항목에 이미지를 지정합니다.  
onPopUp 함수를 전달받아 해당 컨텐츠 항목 클릭(onClick) 호출됩니다.

<br>

## ContentSearch

<br>

```js
const ContentSearch = ({ isSearch, onSearch }) => {
   const [searchText, setSearchText] = useState('');
   const textBoxRef = useRef(null);
   const onTyping = e => {
      setSearchText(e.target.value);
   };
   const onSub = e => {
      e.preventDefault();
      onSearch(searchText);
      setSearchText('');
      textBoxRef.current.focus();
   };
   return (
      <ContentSearchBox className={isSearch ? 'on' : ''} onSubmit={onSub}>
         <input
            type="text"
            placeholder="검색어를 입력해주세요."
            value={searchText}
            onChange={onTyping}
            ref={textBoxRef}
         />
         <button>
            <i className="xi-search"></i>
         </button>
      </ContentSearchBox>
   );
};
```

isSearch 변수를 사용하여 검색 UI를 토글합니다.  
onSearch 함수를 호출하여 검색 기능을 실행합니다.  
searchText 상태를 사용하여 검색창의 입력값을 관리합니다.  
useRef 훅을 사용하여 검색창의 포커스를 관리합니다.  
검색어를 입력(onChange)하면 상태를 변경하고, 검색(onSubmit)하면 입력값을 onSearch 함수에 전달하고 검색창을 초기화합니다.  
ContentSearchBox 스타일드 컴포넌트를 사용하여 검색 UI를 구성하며, isSearch 상태에 따라 스타일이 변경됩니다.

<br>

<br>

## Popup

<br>

```js
const Popup = memo(({ popUpItem, setIsPopUp, onLike, data }) => {
   const { id, title, tag, categories, like, imgUrl, videoUrl, slideimgUrl } = popUpItem;
   return (
      <PopupContainer>
         <div className="bg" onClick={() => setIsPopUp(false)}></div>
         <div className="card">
            <div className="mediaArea">
               {videoUrl !== '' ? <PopUpVideo videoUrl={videoUrl} /> : <SlideImg slideimgUrl={slideimgUrl} />}
            </div>
            <div className="textArea">
               <button className="close" onClick={() => setIsPopUp(false)}>
                  <i className="xi-close"></i>
               </button>
               <strong>
                  {categories === 'PopularContent'
                     ? '인기 콘텐츠'
                     : categories === 'IntroductionToElectricVehicles'
                     ? '전기차 소개'
                     : categories === 'smartElectricCarTrip'
                     ? '슬기로운 전기차 여행'
                     : categories === 'ChargingAndTroubleshooting'
                     ? '충전 및 문제 대처법'
                     : 'FAQ'}
               </strong>
               <p>
                  {title.split('\\n').map((line, idx) => {
                     return (
                        <span key={idx}>
                           {line}
                           <br />
                        </span>
                     );
                  })}
               </p>
               <div className="likeBox">
                  <button onClick={() => onLike(id)}>
                     <SpriteAnimation
                        url={'images/home/icon_heart_68x76.png'}
                        imgW={2244}
                        spriteW={68}
                        animationSpeed={30}
                     />
                  </button>
                  <span>{like}</span>
               </div>
               <div className="sns-share">
                  <div className="tagBox">
                     {tag.map((item, idx) => (
                        <em key={idx}>#{item}</em>
                     ))}
                  </div>
                  <div className="btnBox">
                     <div className="iconBox">
                        <span>
                           <i className="xi-share-alt"></i> 공유하기
                        </span>
                        <a>
                           <img src="./images/icon/icon_blog.png" alt="" />
                        </a>
                        <a>
                           <img src="./images/icon/icon_kakao.png" alt="" />
                        </a>
                        <a>
                           <img src="./images/icon/icon_facebook.png" alt="" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </PopupContainer>
   );
});
```

이 코드는 POPUP 창을 구현하는 컴포넌트입니다. 주요 기능으로는,  
videoUrl과 slideimgUrl이라는 두 가지 종류의 미디어 정보를 받아, 해당 정보에 따라 팝업 창을 랜더링합니다. videoUrl이 있다면 PopUpVideo라는 컴포넌트를 활용하여 비디오를 보여줍니다. 반대로, slideimgUrl이 있다면 SlideImg라는 컴포넌트를 활용하여 이미지 슬라이드쇼를 보여줍니다.  
popUpItem의 categories 프로퍼티에 따라 해당 콘텐츠의 카테고리를 텍스트로 보여주며, popUpItem의 title 프로퍼티에 있는 텍스트를 br 태그로 구분하여 보여줍니다.  
좋아요 기능을 구현한 것으로, 하트 모양의 스프라이트 애니메이션을 보여줌으로써 좋아요 버튼이 눌린 효과를 구현합니다.
popUpItem의 tag 프로퍼티를 이용하여 해당 콘텐츠와 관련된 태그들을 보여주며, 공유하기 기능을 구현하기 위한 아이콘과 버튼을 제공합니다.

<br>

</details>
<details>
<summary>hyundaiev</summary>

<br>

```js

```

</details>
<details>
<summary>info</summary>

<br>

```js

```

</details>
<details>
<summary>noticeList</summary>

<br>

```js

```

</details>

<br>

</details>

<br>

## 7. 프로젝트 기획 목적

<br>

-  기존 프로젝트의 개선: 이 프로젝트는 기존 [탐라는 전기차 페이지](https://www.tamraev.com/)를 리액트와 styled-component를 사용하여 재구성한 것입니다. 기존 프로젝트에서 발생한 문제점이나 한계를 극복하고, 사용자 경험을 향상시키기 위해 새로운 아키텍처를 도입하였습니다.

-  코드의 가독성과 유지보수성 향상: 기존 프로젝트의 코드를 개선하여 가독성과 유지보수성을 향상시켰습니다. 페이지와 컴포넌트를 분리하여 작업함으로써 코드의 구조를 명확히하고, 재사용 가능한 컴포넌트를 components 폴더에서 관리함으로써 중복 코드를 줄였습니다.

-  확장성과 재사용성: 프로젝트를 pages 폴더와 components 폴더로 나누어 작업하였습니다. 이렇게 구조화된 프로젝트는 향후 수정과 보완이 쉽게 이루어질 수 있으며, 새로운 기능 추가나 다른 프로젝트에도 쉽게 적용할 수 있는 장점을 가지고 있습니다.

-  사용자 정의 훅의 활용: hooks 폴더에는 useAxios와 useInput과 같은 사용자 정의 훅을 생성하였습니다. 이러한 훅은 코드의 재사용성을 높이고 개발 효율성을 향상시킬 뿐만 아니라, 코드의 일관성을 유지하고 중복된 로직을 줄이는 데 도움을 줍니다.

-  종합적으로, 이 프로젝트의 목적은 기존 프로젝트의 개선과 코드의 가독성, 유지보수성 향상, 확장성과 재사용성 강화, 사용자 정의 훅의 활용 등을 통해 더 효율적이고 유연한 개발 환경을 구축하는 것입니다.
