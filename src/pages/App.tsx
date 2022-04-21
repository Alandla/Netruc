import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { useState } from 'react'
import '../style/App.css'

import imgFav from '../../img/Favori.png';
import imgNext from '../../img/next.png';

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
    <div className='App'>
      <div className='container'>
        <img src={imgNext} className='imgFav'/>
        <img src={imgFav} className='imgFav'/>
        <div className='content'>
          <YouTube videoId="2g811Eo7K8U" opts={opts}/>
        </div>
      </div>
    </div>
  );
};

export default App
