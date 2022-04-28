import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import '../style/App.css'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState<string | number | undefined>();
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
              <img src="../../img/next.png" className='imgFav'/>
              <img src="../../img/Favori.png" className="imgFav"/>
              <div className='content' ref={ref}>
                <YouTube className="video" videoId="f0X1Tl8aHtA" opts={opts}/>
              </div>
          </div>
      </div>
    );
  };
  
  export default Home