import React from 'react';

import '../style/Param.css'

const Param = () => {

  return (
    <div className='Param'>
      <div className='Hist'>
        <p>Historique</p>
        <div>
          <img src="https://img.youtube.com/vi/f0X1Tl8aHtA/0.jpg" className='MiniatureVideo' />
        </div>
      </div>
      <div className='Fav'>
        <p>Favoris</p>
        <div>
          <img src="https://img.youtube.com/vi/f0X1Tl8aHtA/0.jpg" className='MiniatureVideo' />
        </div>
      </div>
    </div>
  );
};

export default Param
