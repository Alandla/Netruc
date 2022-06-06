import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../style/App.css'

import Menu from "./Menu";
import Home from "./Home";
import Param from "./Param";
import Trophe from "./Trophe";
import Succes from './Succes';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Param" element={<Param />} />
          <Route path="/Trophe" element={<Trophe />}/>
          <Route path="/Succes" element={<Succes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
