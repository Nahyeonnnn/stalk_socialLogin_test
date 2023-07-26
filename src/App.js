import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './page/loginPage';
import MainPage from './page/mainPage';
import DetailPage from './page/detailPage';
import SearchPage from './page/searchPage';
import TradePage from './page/tradePage';
import MyInfoPage from './page/myInfoPage';
import NotFoundPage from './page/notFoundPage';

function App() {
  return (
    
    <>
      <BrowserRouter> 
      <Routes>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/main" element={<MainPage />} />
      <Route path="/detail" element={<DetailPage />} /> 
      <Route path="/search" element={<SearchPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/myInfo" element={<MyInfoPage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;