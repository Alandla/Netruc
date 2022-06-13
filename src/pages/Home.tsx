import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import '../style/App.css'
import nextIcon from '../../img/next.png'
import favIcon from '../../img/fav-1.png'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const googleKey = "AIzaSyDy8Ffsa3uArpVPixo0b46IZe-jBZeEMNY"

    const [width, setWidth] = useState<string | number | undefined>();
    const [height, setHeight] = useState<string | number | undefined>();
    const [idVid, setIdVid] = useState<string>();
    const [idVidBefore, setIdVidBefore] = useState<string>();
    const ref = useRef(null);

    const autoplay = 1;
    const rel = 0;
    const loop = 1;
  
    const opts = {
      height: height,
      width: width,
      playerVars: {
        autoplay: autoplay,
        rel: rel,
        loop: loop,
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

          setIdVidBefore(idVid);
          setIdVid(result.items[0].id.videoId)

      })
    }

    if(idVid == null){
      getRandomVid();
      setIdVid("0")
    }

    //@ts-ignore
    const yt = <YouTube className="video" videoId={idVid} opts={opts}/>;

    console.log("Get video: " + idVid)

    return (
      <div className='App'>
          <div className='container'>
              <img src={nextIcon} className="imgFav" onClick={getRandomVid}/>
              <img src={favIcon} className="imgFav"/>
              <div className='content' ref={ref}>
                {yt}
              </div>
          </div>
      </div>
    );
  };
  
  export default Home;