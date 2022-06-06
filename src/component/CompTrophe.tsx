import React from 'react';
import { Link } from 'react-router-dom';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'

var imgPlay;

const CompTrophe = ({ valeur, valeurMax, image, texte1, texte2, exp, border }: any) => {

    if (image == "1") {
        imgPlay = '../../img/Play.png'
    } else {
        imgPlay = '../../img/Favori.png'
    }

    if (border == "1") {
        border = "Objectif"
    } else {
        border = "Objectif BorderRouge"
    }

    return (
        <div className={border}>
            <CircularProgressbar value={valeur} text={`${valeur}`} maxValue={valeurMax} className='circleBar flexTroph' styles={buildStyles({
                textColor: "#DB202C",
                pathColor: "#DB202C",
                trailColor: "#000000"
            })} />
            <span className='texteObj flexTroph'>
                <img src={imgPlay} />
                <span className='texteTitre'> {texte1} </span>
                <br />
                <span className='texteDesc'> {texte2} </span>
            </span>
            <div className='Right flexTroph'>
                <span>Récompense</span>
                <div className='circle'>
                    <p className='text'>+{exp} XP</p>
                </div>
            </div>
            <div className='Recup'>
                Récupérer
            </div>
        </div>
    );
};

export default CompTrophe