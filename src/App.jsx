import React from 'react';
import GlobalStyle from './styled/Global';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Info from './pages/info/Info';
import NoticeList from './pages/noticeList/NoticeList';
import Home from './pages/home/Home';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="info" element={<Info />} />
               <Route path="NoticeList" element={<NoticeList />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
