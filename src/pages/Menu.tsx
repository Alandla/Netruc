import React from 'react';

import { useState } from 'react'
import netruc from '../../img/NETRUC.png'
import imgMenu from '../../img/Menu.png'
import imgPhoto from '../../img/picture-icon.png'
import imgVideo from '../../img/camera-bouton.png'
import '../style/Menu.css'

import { Switch } from 'antd';
import { PictureOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Menu = () => {

    return (
    <div className='Menu'>
        <header className='headerMenu'>
            <Switch
                checkedChildren={<VideoCameraOutlined />}
                unCheckedChildren={<PictureOutlined />}
                defaultChecked
            />
            <img src={netruc} className='netruc' alt="logo" />
            <img src={imgMenu} className='imgMenu'/>
        </header>
    </div>
    );
  };

  export default Menu