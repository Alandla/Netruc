import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import { useState } from 'react'
import netruc from '../../img/NETRUC.png'
import imgQuest from '../../img/Quest.png'
import imgProfil from '../../img/utilisateur.png'
import imgStars from '../../img/Stars.png'
import '../style/Menu.css'

const Menu = () => {

    return (
    <div className='Menu'>
        <header className='headerMenu profil'>
            <div className='flex divMenu'>
                <a href="/Param" className='imgMenu imgUtil'>
                    <img src={imgProfil}/>
                </a>
                <span className='util'>Invité</span>
                <span className='imgStars'>14<img src={imgStars}/></span>
                <ProgressBar className='progBar' completed={80} bgColor="#DB202C" baseBgColor='#FFFFFF' />
            </div>
            <div className='flex netruc'>
                <a href="/">
                    <img src={netruc} alt="logo" />
                </a>
            </div>
            <div className='flex imgQuest'>
                <a href="/Param" className='imgMenu'>
                    <img src={imgQuest}/>
                </a>
            </div>
        </header>
    </div>
    );
  };

  export default Menu