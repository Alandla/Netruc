import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { useState, useEffect, useRef } from 'react'
import '../style/App.css'

import imgFav from '../../img/Favori.png';
import imgNext from '../../img/next.png';

const App = () => {

  const [width, setWidth] = useState();
  const [height, setHeight] = useState<number | null>();
  const ref = useRef(null);

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      rel: 0,
      loop: 1,
      controls: 0,
    },
  };

  function setSizeContent() {
    if(ref.current != null){
      setWidth((ref.current as any).clientWidth);
      setHeight((ref.current as any).clientHeight - 30);
    }
  }

  useEffect(() => {
    setSizeContent();
  })

  return (
    <div className='App'>
      <div className='container'>
        <img src={imgNext} className='imgFav'/>
        <img src={imgFav} className='imgFav'/>
        <div className='content' ref={ref}>
          <YouTube className="video" videoId="f0X1Tl8aHtA" opts={opts}/>
        </div>
      </div>
    </div>
  );
};

export default App
