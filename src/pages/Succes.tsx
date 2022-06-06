import React from 'react';
import { Link } from 'react-router-dom';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'

const Succes = () => {
    return (
        <div className='Trophe'>
            <div className='titreTrophe'>
                <Link to="/Trophe"><span>OBJECTIFS</span></Link>
                <span className='childTitreTrophe textGras'>SUCCÈS</span>
            </div>
            <div className='trophe'>
                <div className='trophe1'>


                </div>
            </div>
        </div>
    );
}

export default Succes