import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../style/App.css'

import Menu from "./Menu";
import Home from "./Home";
import Param from "./Param";

const App = () => {

  return (
    <div className='App'>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Param" element={<Param />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
