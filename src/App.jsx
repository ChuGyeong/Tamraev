import React from 'react';
import GlobalStyle from './styled/Global';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Info from './pages/info/Info';
import NoticeList from './pages/noticeList/NoticeList';
import Home from './pages/home/Home';
import Visual from './pages/home/Visual';

const App = () => {
   return (
      <>
         <GlobalStyle />
      </>
   );
};

export default App;
