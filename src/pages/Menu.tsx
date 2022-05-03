import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';

import { useState } from 'react'
import netruc from '../../img/NETRUC.png'
import imgTrophe from '../../img/Trophe.png'
import imgProfil from '../../img/utilisateur.png'
import imgStars from '../../img/Stars.png'
import '../style/Menu.css'

const Menu = () => {

    return (
    <div className='Menu'>
        <header className='headerMenu profil'>
            <div className='flex divMenu'>
                <Link to="/Param">
                    <img src={imgProfil} className='imgMenu imgUtil'/>
                </Link>
                <div>
                    <span className='util'>Invité</span>
                    <span className='imgStars'>14<img src={imgStars}/></span>
                </div>
                <ProgressBar className='progBar' completed={80} bgColor="#DB202C" baseBgColor='#FFFFFF' />
            </div>
            <div className='flex netruc'>
                <Link to='/'>
                    <img src={netruc} alt="logo" />
                </Link>
            </div>
            <div className='flex imgQuest'>
                <Link to='/Trophe'>
                    <img src={imgTrophe} className='imgMenu'/>
                </Link>
            </div>
        </header>
    </div>
    );
  };

  export default Menu