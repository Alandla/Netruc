import React from 'react';

import '../style/component/CardSuccess.css'
import imgLockRedfrom from '../../img/red-lock.png'
import imgTropheeRed from '../../img/red-trophe.png'

const CardSucces = ({state, nb, date}:any) => {

    if(state == "end"){
        var imageIcon = imgTropheeRed
    } else {
        var imageIcon = imgLockRedfrom
    }

  return (
    <div className={'card-container ' + state}>
        <div className='number-card'>{nb}</div>
        <div className='date-card'>{date}</div>
        <img className='trophee-card' src={imageIcon}></img>
    </div>
  );
};

export default CardSucces
