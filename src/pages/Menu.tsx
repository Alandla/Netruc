import React from 'react';

import { useState } from 'react'
import netruc from '../../img/NETRUC.png'
import imgQuest from '../../img/Quest.png'
import imgProfil from '../../img/utilisateur.png'
import '../style/Menu.css'

const Menu = () => {

    return (
    <div className='Menu'>
        <header className='headerMenu profil'>
            <div className='divMenu'>
                <a href="/Param" className='imgMenu'>
                    <img src={imgProfil}/>
                </a>
                <p className='util'>Invité</p>
            </div> 
            <a href="/" className='netruc'>
                <img src={netruc} alt="logo" />
            </a>
            <a href="/Param" className="imgMenu quest">
                <img src={imgQuest} className='imgMenu'/>
            </a>
        </header>
    </div>
    );
  };

  export default Menu