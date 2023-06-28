import React from 'react';
import GlobalStyle from './styled/Global';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Info from './pages/info/Info';
import NoticeList from './pages/noticeList/NoticeList';
import Home from './pages/home/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NoticeDetail from './pages/noticeList/NoticeDetail';
import Error from './components/Error';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="info" element={<Info />} />
               <Route path="noticeList" element={<NoticeList />} />
               <Route path="noticeDetail">
                  <Route index element={<NoticeList />} />
                  <Route path=":noticeID" element={<NoticeDetail />} />
               </Route>
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App;
