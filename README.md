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
<summary>App &#128204;</summary>

<br>

```js
import GlobalStyle from './styled/Global';
...
<GlobalStyle />
```

글로벌 스타일 적용: GlobalStyle은 전체 애플리케이션에 적용되는 글로벌 스타일(reset style)입니다.

```js
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
...
<Router>
   <Routes>
      {/* 여러 Route 컴포넌트들 */}
   </Routes>
</Router>
```

라우터 설정: react-router-dom 라이브러리를 사용하여 라우터 설정을 합니다. HashRouter를하여 웹 애플리케이션의 라우팅을 처리하고, 여러 페이지를 관리합니다.

```js
<Route path="/" element={<Home />} />
<Route path="info" element={<Info />} />
<Route path="noticeList" element={<NoticeList />} />
<Route path="noticeDetail">
   <Route index element={<Error />} />
   <Route path=":noticeID" element={<NoticeDetail />} />
</Route>
...
<Route path="*" element={<Error />} />
```

페이지 라우팅 및 컴포넌트 매핑: Routes 컴포넌트 내에서 여러 Route 컴포넌트를 사용하여 페이지 경로와 해당 페이지를 구성하는포넌트를 매핑합니다. 이를 통해 웹 애플리케이션이 다양한 컴포넌트를 라우팅할 수 있습니다.

```js
<Footer />
```

공통 컴포넌트 렌더링: Footer 컴포넌트는 모든 페이지에서 공통으로 렌더링되는 하 영역을 구성합니다. 이 메인 애플리케이션 App은 여러 페이지와 라우팅 설정을 포함하여 전체 웹 애플리케이션을 구성하고 관리하는 데 필요한 기능들을 제공합니다. 원하는 페이지를 추가하고 해당 컴포넌트를 매핑하여 쉽게 웹 애플리케이션을 확장할 수 있습니다.

<br>

</details>
<details>
<summary>components &#128204;</summary>

---

<details>
<summary>Nav</summary>

<br>

```js
const [isNavActive, setIsNavActive] = useState(false);
const toggleNav = () => {
   setIsNavActive(!isNavActive);
};
```

필요한 상태 및 이벤트 처리: isNavActive 상태 변수를 사용하여 네비게이션 메뉴의 활성 상태를 관리하고, toggleNav 함수를 호출하여 메뉴를 열거나 닫을 수 있습니다.

```js
<NavContainer line_color={isMain ? '#fff' : '#002c5f'} nav_bottom_margin={isMain ? '-120px' : '0px'}>
   ...
</NavContainer>
```

스타일에 따른 렌더링: isMain 속성을 사용하여 메인 페이지에 대한 구분을 지원합니다. 메인 페이지에서 네비게이션 바의 스타일(텍스트 색상 및 하단 여백 등)을 변경할 수 있습니다.

```js
<i onClick={toggleNav} className={`hamburger ${isNavActive ? 'is-active' : ''}`}>
...
<div className={`bg ${isNavActive ? 'on' : ''}`}></div>
```

햄버거 메뉴 및 배경 렌더링: 햄버거 메뉴와 배경 렌더링에 대한 상태 변화를 관리합니다. 메뉴가 활성화되면, 햄버거 메뉴와 배경의 CSS 클래스가 변경되어 메뉴와 배경이 열렸다 닫혔다 함을 나타냅니다.

```js
<Link to={'/'}>
   <img src={isMain ? './images/common/logo.png' : './images/common/logo_b.png'} alt="" />
</Link>
...
<li>
   <Link to={'/info'}>탐라는 전기차</Link>
</li>
...
```

사이트 로고 및 페이지 링크: 네비게이션 바에는 사이트 로고와 페이지 링크가 포함되어 있습니다. react-router-dom 라이브러리의 Link 컴포넌트를 사용하여 페이지간 이동이 가능하도록 구현되어 있습니다.

```js
<Swiper
   className="nav-swiper"
   slidesPerView="1"
   autoplay={{ delay: 4000, disableOnInteraction: false }}
   modules={[Autoplay]}
   noSwipingClass="swiper-no-swiping"
   speed={10}
   loop={true}>
   ...
</Swiper>
```

슬라이더 구성: 'nav-swiper' 클래스를 가진 Swiper 컴포넌트를 사용하여 슬라이딩 이미지를 구성합니다. 옵션을 통해 자동 재생, 속도, 반복 등 슬라이더 기능을 설정합니다. Nav 컴포넌트는 웹 사이트의 기본 네비게이션 기능을 제공하며 사용자가 웹 사이트의 다른 페이지로 쉽게 이동할 수 있도록 돕습니다. 함수형 컴포넌트와 hooks를 사용하여 상태 및 이벤트 처리를 관리합니다.

</details>
<details>
<summary>SpriteAnimation</summary>

<br>

```js
const SpriteAnimation = memo(({ url, imgW, spriteW, animationSpeed }) => {
...
```

props 설정: SpriteAnimation 컴포넌트는 스프라이트 이미지 파일 경로(url), 전체 스프라이트 이미지의 너비(imgW), 스프라이트 한 프레임의 너비(spriteW), 그리고 애니메이션 속도(animationSpeed)를 매개변수로 받습니다.

```js
const [likePosition, setLikePosition] = useState(0);
const animationRef = useRef(null);
```

상태 및 참조 설정: 상태 관리를 위해 sprite 이미지의 위치(likePosition)를 설정하고, 애니메이션 참조(animationRef)를 useRef를 사용하여 관리합니다.

```js
const startAnimation = () => {
   if (!animationRef.current) {
      setLikePosition(0);
      animate();
   }
};
```

애니메이션 시작: 현재 애니메이션 참조가 없다면, 이미지 위치를 초기화하고 animate 함수를 호출하여 애니메이션을 시작합니다.

```js
const animate = () => {
  ...
  const frame = currentTime => {
    ...
  };
  animationRef.current = requestAnimationFrame(frame);
};
```

애니메이션 프레임 처리: animate 함수는 애니메이션 프레임 처리를 위한 frame 함수를 정의하고, 브라우저의 requestAnimationFrame을 사용하여 애니메이션을 진행합니다.

```js
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
```

렌더링 및 이벤트 처리: 스프라이트 이미지를 렌더링하고, 사용자가 클릭하면 애니메이션을 시작할 수 있도록 합니다.

</details>

---

</details>
<details>
<summary>hooks &#128204;</summary>

---

<details>
<summary>useAxios</summary>

<br>

```js
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

useState로 상태 관리: useState를 사용하여 데이터(data), 로딩 상태(loading), 오류 메시지(error)를 관리합니다.

```js
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
```

useEffect를 이용한 데이터 fetching: useEffect를 사용하여 컴포넌트가 마운트되거나 url이 업데이트 될 때마다 비동기 요청을 수행합니다. 요청이 성공적으로 이루어지면 데이터를 설정하고 loading 및 error 상태를 업데이트합니다. 요청이 실패하면 오류 메시지를 설정하고 loading 및 data 상태를 업데이트합니다.

```js
return { data, loading, error };
```

반환(return) 값: useAxios custom hook은 사용 가능한 데이터, 로딩 상태 및 에러 메시지를 반환하여 컴포넌트에서 사용할 수 있도록 합니다. 이 코드는 주어진 URL에서 데이터를 가져와 로딩 상태와 에러를 관리할 수 있도록 도와주는 useAxios라는 custom hook을 구현한 것입니다. 이를 사용하여 컴포넌트에서 쉽게 데이터를 가져올 수 있습니다.

</details>
<details>
<summary>useInput</summary>

<br>

```js
const [state, setState] = useState(initialState);
```

상태 관리를 위한 useState 사용: useState를 사용하여 주어진 초기 상태(initialState)를 가진 상태 state와, 상태를 업데이트하는 함수 setState를 선언합니다.

```js
const changeInput = useCallback(
   e => {
      const { value, name } = e.target;
      setState({ ...state, [name]: value });
   },
   [state],
);
```

인풋 값 변경에 대한 콜백 함수 정의 (useCallback 사용): useCallback을 사용하여 입력 필드 값이 변경될 때 실행될 콜백 함수를 선언합니다. 이벤트 객체 e로부터 입력 값(value)과 해당 필드의 이름(name)을 가져와, 상태 업데이트 함수인 setState로 상태를 업데이트합니다.

```js
return { state, changeInput, setState };
```

반환값 (return): useInput custom hook은 현재 입력 상태(state), changeInput 콜백 함수, 그리고 상태 설정 setState를 반환합니다. 이를 통해 다양한 입력 필드 상태를 쉽게 관리할 수 있습니다. 이 코드는 여러 입력 필드의 상태를 관리하기 쉽도록 도와주는 useInput이라는 사용자 정의 custom hook을 구현하는 데 사용됩니다. 이를 사용하면 개별 입력 필드 상태를 일일이 선언하지 않고도 상태 관리를 수행할 수 있어 전체 코드를 깔끔하게 유지할 수 있습니다.

</details>

---

</details><details>
<summary>pages &#128204;</summary>

---

<details>
<summary>home</summary>

<br>

## **Home**

<br>

```js
const {
   data: dataList,
   loading,
   error,
} = useAxios(
   'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/12780e33b46e459942d09db7faaa58e3e5631758/tamraev.json',
);
```

데이터 가져오기: useAxios 라이브러리를 사용하여 JSON 데이터를 원격 주소에서 가져옵니다.

```js
const [data, setData] = useState(dataList || []);
const [menus, setMenus] = useState([...]);
const [itemNumInPage, setItemNumInPage] = useState(6);
const [isPopUp, setIsPopUp] = useState(false);
const [popUpItem, setPopUpItem] = useState({});
```

상태 관리: 여러 상태 변수는 컴포넌트의 여러 기능을 관리하며, 각 상태에 변화를 주고 받습니다.

```js
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
```

페이지에 컴포넌트 렌더링: 홈 페이지 컴포넌트는 다양한 하위 컴포넌트를 사용합니다. Nav, Visual, Contents, 그리고 선택 사항인 Popup 컴포넌트를 포함합니다.

```js
const onPopUp = item => {...};
const onLike = id => {...};
const onSearch = text => {...};
const changeCategory = id => {...};
```

컴포넌트 간 이벤트 처리 및 상태 변경: 여러 이벤트 처리 함수를 사용하여 컴포넌트 간 상태 변경을 관리합니다. 이를 통해 사용자 입력에 따라 데이터를 업데이트하고 다시 렌더링합니다. 이 코드에서 제공하는 기능들을 바탕으로 전기차를 소개하고 사용하기 위한 꿀팁, 카테고리 내용, FAQ 등의 정보를 제공하고 관리하는 웹 페이지를 구축할 수 있습니다.

<br>

## **Visual**

<br>

```js
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
   // SwiperSlide 자식 컴포넌트들
</Swiper>
```

Swiper 컴포넌트 사용: Swiper 라이브러리를 사용하여 슬라이더를 구현합니다. 여기에는 슬라이드 뷰 개수, 방향, 페이지네이션, 자동 재생, 속도, 루프 및 슬라이드 변경 이벤트와 같은 다양한 옵션을 설정할 수 있습니다.

```js
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
```

SwiperSlide 컴포넌트 렌더링: 각 슬라이더 페이지는 SwiperSlide 컴포넌트를 사용하여 렌더링됩니다. 이 예에서는 이미지와 함께 제목 및 설명 텍스트를 포함하고 있습니다. 이 Visual 컴포넌트는 간단한 슬라이더 기능을 제공하며, 웹 사이트의 시각적 요소를 더욱 풍성하게 만듭니다. 필요에 따라 추가 슬라이더 페이지를 추가하거나 현재 있는 내용을 수정할 수 있습니다.

<br>

## **CategoryMenu**

<br>

```js
{
   menus.map(item => (
      <li key={item.id} className={item.isChk ? 'on' : ''} onClick={() => changeCategory(item.id)}>
         {item.kor}
      </li>
   ));
}
```

카테고리 목록 렌더링: menus 배열을 이용하여 카테고리 네비게이션 메뉴의 각 항목을 렌더링합니다. 선택된 카테고리에 따라 on 클래스를 적용하고, 항목을 클릭하면 changeCategory 함수를 호출해 카테고리를 변경합니다.

```js
<li>
   <Link to={'/hyundaievList'}>전기차 목록</Link>
</li>
<li>
   <Link to={'/noticeList'}>제주 전기차 뉴스</Link>
</li>
```

전기차 목록 및 뉴스 링크: 전기차 목록과 뉴스 메뉴에 연결되는 링크를 렌더링합니다.

```js
<button onClick={() => setIsSearch(!isSearch)}>
   {isSearch ? <i className="xi-close"></i> : <i className="xi-search"></i>}
   {isSearch ? '닫기' : '검색'}
</button>
```

검색 버튼 및 검색 상태 관리: 검색 버튼을 렌더링합니다. 버튼을 클릭하면 isSearch 상태가 토글되어 검색 창의 활성화 여부를 제어합니다. 버튼의 텍스트와 아이콘 또한 isSearch 상태에 따라 변경됩니다.

```js
{
   <ContentSearch isSearch={isSearch} onSearch={onSearch} />;
}
```

검색창 컴포넌트 렌더링: 검색 창 컴포넌트인 ContentSearch를 렌더링합니다. isSearch 상태를 전달하여 검색 창이 활성화되었는지 여부를 확인하고, onSearch 함수를 전달해 검색을 실행할 수 있습니다.

<br>

## **ContentList**

<br>

```js
{
   data.map((item, idx) => idx < itemNumInPage && <ContentItem key={item.id} item={item} onPopUp={onPopUp} />);
}
```

콘텐츠 아이템 렌더링: data 배열을 사용하여 각 콘텐츠 아이템을 렌더링합니다. 현재 페이지에 표시될 아이템 수를 제한하기 위해 idx < itemNumInPage 조건을 사용합니다. 각 아이템에는 고유한 key 속성, 개별 아이템 데이터, 그리고 팝업 이벤트를 처리하는 onPopUp 함수가 전달됩니다.

```js
const moreShow = () => {
   setItemNumInPage((itemNumInPage += 6));
};
```

더보기 버튼 및 기능 구현: moreShow 함수는 더보기 버튼을 클릭할 때 화면에 표시되는 아이템 수를 증가시키는 역할을 합니다. 기본적으로 6개의 추가 아이템이 로드되며, setItemNumInPage를 사용하여 아이템 수를 업데이트합니다.

```js
{
   data.length > itemNumInPage && (
      <div className="view-more-btn">
         <button onClick={moreShow}>
            <i className="xi-plus"></i>
            <span>더보기</span>
         </button>
      </div>
   );
}
```

더보기 버튼 렌더링: 아이템 배열의 길이가 현재 표시된 아이템 수보다 길 경우 더보기 버튼을 렌더링합니다. 버튼을 클릭하면 moreShow 함수가 실행되어 화면에 추가 아이템이 로드됩니다. 이 컴포넌트는 콘텐츠 목록을 표시하고, 필요에 따라 더 많은 아이템을 로드할 수 있는 기능을 제공합니다. 아이템 개수 제한을 늘리거나 줄이면서 사용자에게 적절한 양의 콘텐츠를 제공할 수 있습니다.

<br>

## **ContentItem**

<br>

```js
<ContentItemList onClick={() => onPopUp(item)}>
   <img src={imgUrl} alt="" />
</ContentItemList>
```

개별 아이템 렌더링: 각 콘텐츠 항목을 그리드 형식으로 렌더링합니다. 아이템 이미지를 포함하며, 이미지를 클릭하면 onPopUp 함수를 호출하여 해당 아이템에 대한 팝업 창을 엽니다.

<br>

## **ContentSearch**

<br>

```js
<ContentSearchBox className={isSearch ? 'on' : ''} onSubmit={onSub}>
```

검색 창 상태 표시: isSearch 값에 따라 검색 창 상태를 표시합니다. isSearch가 true일 때 'on' 클래스가 적용되어 검색 창이 활성화되며, 그렇지 않으면 'on' 클래스가 적용되지 않아 검색 창이 비활성화됩니다.

```js
const [searchText, setSearchText] = useState('');
const onTyping = e => {
   setSearchText(e.target.value);
};
```

검색어 입력 및 상태 관리: 사용자가 입력한 검색어를 상태로 관리하기 위해 useState 훅을 사용합니다. onTyping 함수를 onChange 이벤트에 할당하여 검색어를 입력할 때마다 해당 상태가 업데이트됩니다.

```js
const onSub = e => {
   e.preventDefault();
   onSearch(searchText);
   setSearchText('');
   textBoxRef.current.focus();
};
```

검색 실행 및 초기화: 검색을 실행하는 onSub 함수입니다. 입력된 검색어를 onSearch 함수에 전달하고, 검색어 상태를 초기화하며 (setSearchText('')), 검색 창에 다시 포커스를 설정합니다.

```js
const textBoxRef = useRef(null);
ref = { textBoxRef };
```

입력 상자 참조 및 포커스 관리: useRef 훅을 사용하여 입력 상자에 대한 참조를 생성합니다. 이 참조를 사용하여 onSub 함수에서 검색 창에 포커스를 설정할 수 있습니다.

<br>

<br>

## **Popup**

<br>

```js
{
   videoUrl !== '' ? <PopUpVideo videoUrl={videoUrl} /> : <SlideImg slideimgUrl={slideimgUrl} />;
}
```

조건부 미디어 렌더링: videoUrl이 비어 있지 않은 경우 PopUpVideo 컴포넌트를, 그렇지 않으면 SlideImg 컴포넌트를 렌더링합니다. 이를 통해 미디어 영역에 적절한 미디어를 표시할 수 있습니다.

```js
{
   title.split('\\n').map((line, idx) => {
      return (
         <span key={idx}>
            {line}
            <br />
         </span>
      );
   });
}
```

여러 줄의 제목 표시: 제목 문자열을 여러 줄로 나누어 적절하게 표시하는 부분입니다. split 메서드를 사용하여 줄 바꿈 문자(\n)를 기준으로 문자열을 배열로 변환한 다음, map 함수를 사용하여 필요한 `<br />` 태그를 표시할 수 있습니다.

```js
<button onClick={() => onLike(id)}>
   <SpriteAnimation url={'images/home/icon_heart_68x76.png'} imgW={2244} spriteW={68} animationSpeed={30} />
</button>
```

좋아요 버튼 및 기능: 좋아요 버튼을 클릭하면 onLike 함수를 실행합니다. 이 함수는 외부에서 전달되며, 일반적으로 좋아요 수를 증가시키거나 API를 호출하여 서버와 상호작용할 수 있습니다. 또한 스프라이트 애니메이션을 사용하여 손가락 하트 아이콘을 다양한 스프라이트 이미지로 렌더링합니다.

```js
{
   tag.map((item, idx) => <em key={idx}>#{item}</em>);
}
```

공유하기 버튼 및 태그 박스: 태그를 각 행에 출력합니다. map 함수를 사용하여 태그 배열의 각 원소가 `<em>` 태그로 래핑되도록 합니다. 공유하기 버튼은 현재 링크가 연결되어 있지 않지만, 향후 개발자가 필요한 공유 기능을 API와 연결하기 위한 공간으로 사용됩니다.

```js
<button className="close" onClick={() => setIsPopUp(false)}>
   <i className="xi-close"></i>
</button>
```

팝업 닫기: 팝업의 닫기 버튼을 누르면 setIsPopUp 함수를 호출하여 팝업을 닫습니다. 이 함수는 외부에서 전달되며, 보통 팝업의 상태를 관리하는 데 사용됩니다.

<br>

</details>
<details>
<summary>hyundaiev</summary>

<br>

## **HyundaievList**

<br>

```js
const {
   data: hyundaievData,
   loading,
   error,
} = useAxios(
   'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/55930ae06ea0394319e38175a75454eea25ad650/hyundaiev.json',
);
```

useAxios 라는 커스텀 훅을 사용하여 Hyundai 전기차 데이터(JSON 형식)를 비동기적으로 받아옵니다. 이 데이터는 이미지를 화면에 표시할 때 사용됩니다.

```js
{hyundaievData
   .filter(item => item.id === Number(hyundaievImgID))
   .map(item => (
      // ...
))}
```

useParams()로 받아온 hyundaievImgID와 일치하는 ID를 가진 항목만 filter 함수를 사용하여 필터링합니다. 그런 다음 map 함수를 사용하여 해당 항목을 컴포넌트로 표시합니다.

<br>

## **HyundaievItem**

<br>

```js
const HyundaievItem = memo(({ item }) => {
   const { mainImage, name, releaseDate, price, motor, battery, id, title } = item;
```

컴포넌트 정의 및 속성 구조 분해 할당: HyundaievItem 컴포넌트를 정의하고 item 속성을 구조 분해 할당하여 데이터를 가져옵니다.

```js
<div className="imgBox">
   <img src={mainImage} alt="" />
</div>
<div className="textBox">
   <h4>{name}</h4>
   <span>{releaseDate}</span>
   <p>가격 {Numeral(price.slice(0, 4)).format(0, 0)}만원</p>
   <p>연료 {motor.fuel}</p>
   <p>주행 {battery.mileage}</p>
</div>
```

이미지 및 상세 정보 표시: mainImage를 이미지로 표시하고, 자동차의 이름, 출시일, 가격, 연료 종류 및 주행 거리 정보를 텍스트로 표시합니다. 가격을 보기 좋게 표시하기 위해 numeral.js를 사용합니다.

```js
<div className="moreBox">
   <button>
      <Link to={`/hyundaievDetail/${id}`}>
         {title}
         <i className="xi-library-books"></i>
         <br />
         <em>자세히보기</em>
      </Link>
   </button>
   <button>
      <Link to={`/hyundaievImg/${id}`}>
         <i className="xi-library-image"></i>
         <br />
         <em>이미지 더보기</em>
      </Link>
   </button>
</div>
```

자세히 보기 및 이미지 더보기 링크 구성: 각 차량의 상세 정보 페이지와 이미지 보기 페이지로 이동하도록 링크가 설정된 버튼을 구성합니다. 이 코드는 현대 자동차 전기차 모델 및 각 모델에 대한 상세 정보와 이미지를 일괄적으로 표시하는 HyundaievItem 컴포넌트를 구현하는 데 사용됩니다. 이 컴포넌트를 사용하여 전기차 모델 카탈로그 형식의 웹 페이지를 제작할 수 있습니다.

<br>

## **HyundaievImg**

<br>

```js
const { hyundaievImgID } = useParams();
const {
   data: hyundaievData,
   loading,
   error,
} = useAxios(
   'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/55930ae06ea0394319e38175a75454eea25ad650/hyundaiev.json',
);
```

useParams 및 useAxios 사용: 경로 파라미터로 전달된 hyundaievImgID를 확인하기 위해 useParams를 사용하고, 현대 전기차의 데이터를 가져오기 위해 useAxios 훅을 사용합니다.

```js
return !loading && hyundaievData ? <Loading /> : <DetailImgContainer>// ...</DetailImgContainer>;
```

로딩 중 처리 및 DetailImgContainer 렌더링: 데이터 로딩이 완료되지 않은 경우 로딩 컴포넌트를 렌더링하고, 로딩이 완료되면 실제 DetailImgContainer를 렌더링합니다.

```js
{hyundaievData
   .filter(item => item.id === Number(hyundaievImgID))
   .map(item => (
      // ...
))}
<button className="list">
   <Link to={`/hyundaievList`}>목록보기</Link>
</button>
```

이미지 출력 및 목록보기 링크 구성: 현재 선택된 전기차 이미지를 필터링하여 출력하고, 목록보기 버튼을 구성하여 이전 페이지로 돌아갈 수 있는 링크를 생성합니다. 이 코드는 현대 전기차의 이미지를 웹 페이지에 렌더링하는 데 사용되며, 경로 파라미터를 이용하여 원하는 전기차에 대한 상세 이미지만 출력할 수 있는 기능을 제공합니다. 또한 목록보기 버튼을통해 리스트로 쉽게 돌아갈 수 있습니다.

<br>

## **HyundaievDetail**

<br>

```js
{hyundaievData
   .filter(item => item.id === Number(hyundaievID))
   .map(item => (
      // ...
))}
<div className="paging">
   // 이전 글 링크
   // 목록보기 링크
   // 다음 글 링크
</div>
```

상세 정보 출력 및 이전/다음 글, 목록보기 링크 구성: 현재 선택된 전기차의 상세 정보를 필터링하여 출력하고, 이전 글, 목록보기, 다음 글 링크 버튼을 구성하여 전기차 상세 정보 간 이동할 수 있는 기능을 제공합니다. 이 코드는 현대 전기차의 상세 정보 페이지를 구현하고 있으며, 경로 파라미터를 이용하여 원하는 전기차에 대한 상세 정보를 출력할 수 있습니다. 또한 이전 글, 다음 글, 목록보기 버튼을 사용하여 사용자가 원하는 다른 전기차의 상세 정보를 쉽게 확인할 수 있습니다.

</details>
<details>
<summary>noticeList</summary>

<br>

## **NoticeList**

<br>

```js
const [data, setData] = useState(noticeData.sort((a, b) => b.id - a.id) || []);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);
```

상태 및 페이징 변수 설정: 현재 데이터, 현재 페이지, 한 페이지에 표시할 항목 수, 총 페이지 수와 같은 상태 및 페이징 변수를 설정합니다.

```js
const updateView = id => {
   setData(data.map(item => (item.id === id ? { ...item, view: item.view + 1 } : item)));
};

useEffect(() => {
   setData(noticeData);
}, [noticeData]);
```

조회수 업데이트 및 데이터 업데이트: 게시물의 조회수를 업데이트하는 함수(updateView)를 정의하고, 데이터가 변경될 때마다 setData를 호출하여 업데이트하는 useEffect를 사용합니다.

```js
const handleClickFirst = () => {
   setCurrentPage(1);
};
const handleClickPrevious = () => {
   setCurrentPage(prevPage => prevPage - 1);
};
const handleClickNext = () => {
   setCurrentPage(prevPage => prevPage + 1);
};
const handleClickLast = () => {
   setCurrentPage(totalPages);
};
```

페이징 처리 및 이벤트 핸들러: 처음, 이전, 다음, 마지막 페이지로 이동하는 이벤트 핸들러 함수를 정의합니다.

```js
const renderTableData = () => {
   /* ... */
};
const renderPageNumbers = () => {
   /* ... */
};
```

공지사항 목록 및 페이지 번호 렌더링: 페이지 번호를 렌더링하는 함수(renderPageNumbers)와 공지사항 목록을 렌더링하는 함수(renderTableData)를 정의합니다.

<br>

## **NoticeDetail**

<br>

```js
const { noticeID } = useParams();
```

useParams 사용: 현재 URL에서 공지사항의 ID를 가져오기 위해 useParams를 사용합니다.

```js
{noticeData
  .filter(item => item.id === Number(noticeID))
  .map(item => (
    // 상세 정보 렌더링 부분
  ))}

```

공지사항 상세 정보 렌더링: 공지사항 데이터에서 해당되는 ID의 데이터를 필터하여 상세 정보를 렌더링합니다.

```js
{
   item.img.length < 2 ? <img src={item.img} alt="" style={{ width: '100%' }} /> : <SlideImg slideimgUrl={item.img} />;
}
```

이미지 렌더링 및 Sliding 기능 적용: 공지사항에 포함된 이미지가 하나인 경우 일반 이미지를 출력하고, 둘 이상인 경우 SlideImg 컴포넌트를 사용하여 슬라이드 기능을 적용합니다.

```js
<div className="contentBox">
   {item.content.split('\\n').map((line, idx) => {
      return (
         <span key={idx}>
            {line}
            <br />
         </span>
      );
   })}
</div>
```

본문 내용 렌더링: 공지사항의 본문 내용을 렌더하고, 줄바꿈 처리를 적용합니다.

</details>

---

</details>

<br>

## 7. 프로젝트 기획 목적

<br>

-  기존 프로젝트의 개선: 이 프로젝트는 기존 [탐라는 전기차 페이지](https://www.tamraev.com/)를 리액트와 styled-component를 사용하여 재구성한 것입니다. 기존 프로젝트에서 발생한 문제점이나 한계를 극복하고, 사용자 경험을 향상시키기 위해 새로운 아키텍처를 도입하였습니다.

-  코드의 가독성과 유지보수성 향상: 기존 프로젝트의 코드를 개선하여 가독성과 유지보수성을 향상시켰습니다. 페이지와 컴포넌트를 분리하여 작업함으로써 코드의 구조를 명확히하고, 재사용 가능한 컴포넌트를 components 폴더에서 관리함으로써 중복 코드를 줄였습니다.

-  확장성과 재사용성: 프로젝트를 pages 폴더와 components 폴더로 나누어 작업하였습니다. 이렇게 구조화된 프로젝트는 향후 수정과 보완이 쉽게 이루어질 수 있으며, 새로운 기능 추가나 다른 프로젝트에도 쉽게 적용할 수 있는 장점을 가지고 있습니다.

-  사용자 정의 훅의 활용: hooks 폴더에는 useAxios와 useInput과 같은 사용자 정의 훅을 생성하였습니다. 이러한 훅은 코드의 재사용성을 높이고 개발 효율성을 향상시킬 뿐만 아니라, 코드의 일관성을 유지하고 중복된 로직을 줄이는 데 도움을 줍니다.

-  종합적으로, 이 프로젝트의 목적은 기존 프로젝트의 개선과 코드의 가독성, 유지보수성 향상, 확장성과 재사용성 강화, 사용자 정의 훅의 활용 등을 통해 더 효율적이고 유연한 개발 환경을 구축하는 것입니다.
