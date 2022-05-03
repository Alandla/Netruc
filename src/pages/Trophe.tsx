import React from 'react';
import { Link } from 'react-router-dom';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'

import imgPlay from '../../img/Play.png'

const Trophe = () => {

    return (
        <div className='Trophe'>
            <div className='titreTrophe'>
                <span>OBJECTIFS</span>
                <span className='childTitreTrophe'>SUCCÈS</span>
            </div>
            <div className='Objectif'>
                    <CircularProgressbar value={4} text={`${4}`} maxValue={10} className='circleBar flexTroph' styles={buildStyles({
                    textColor: "#DB202C",
                    pathColor: "#DB202C",
                    trailColor: "#000000"
                    })}/>
                    <span className='texteObj flexTroph'>
                        <img src={imgPlay}/>
                        NOMBRE DE VUES
                        <br/>
                        Regarde 10 vidéos dans la journée.
                    </span>
                    <div className='Right flexTroph'>
                    <span>Récompense</span>
                    <div className='circle'>
                        <p className='text'>+50 <br/> XP</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Trophe