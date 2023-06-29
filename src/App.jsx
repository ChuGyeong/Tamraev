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
