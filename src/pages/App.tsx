import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../style/App.css'

import Home from "./Home";
import Param from "./Param";

const opts = {
  height: '720',
  width: '1080',
  playerVars: {
    autoplay: 1,
    rel: 0,
    loop: 1,
    controls: 0,
  },
};

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Param" element={<Param />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
