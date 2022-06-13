import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import '../style/App.css'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const googleKey = "AIzaSyDy8Ffsa3uArpVPixo0b46IZe-jBZeEMNY"

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
      var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=' + googleKey;

      fetch(url)
        .then(res => res.json())
        .then((result) => {

          setIdVid(result.items[0].id.videoId)

      })
    }

    if(idVid == null){
      getRandomVid();
    }

    console.log("Get video: " + idVid)

    return (
      <div className='App'>
          <div className='container'>
              <img src="../../img/next.png" className='imgFav' onClick={getRandomVid}/>
              <img src="../../img/fav-1.png" className="imgFav"/>
              <div className='content' ref={ref}>
                <YouTube className="video" videoId={idVid} opts={opts}/>
              </div>
          </div>
      </div>
    );
  };
  
  export default Home;