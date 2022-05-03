import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import '../style/App.css'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const googleKey = "AIzaSyAt5O2zyVfmDE7PwJiZZz6X19SW0y2HpzM"

    const [width, setWidth] = useState();
    const [height, setHeight] = useState<string | number | undefined>();
    const [idVid, setIdVid] = useState<string>();
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

    function getRandomVid() {
      var data;
      var keyname = "mdpg"
      var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=' + googleKey;

      fetch(url)
      .then(res => res.json())
      .then((result) => {

        setIdVid(result.items[0].id.videoId)

      })
    }

    getRandomVid();

    console.log("Get video: " + idVid)

    return (
      <div className='App'>
          <div className='container'>
              <img src="../../img/next.png" className='imgFav'/>
              <img src="../../img/Favori.png" className="imgFav"/>
              <div className='content' ref={ref}>
                <YouTube className="video" videoId={idVid} opts={opts}/>
              </div>
          </div>
      </div>
    );
  };
  
  export default Home