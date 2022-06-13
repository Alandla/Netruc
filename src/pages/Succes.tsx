import React from 'react';
import { Link } from 'react-router-dom';

import "react-circular-progressbar/dist/styles.css";
import '../style/Succes.css'
import CardSuccess from '../components/CardSuccess';

const Succes = () => {
    
    return(
        <div className='Succes'>
            <div className='navObjSucc'>
                <Link to="/Trophe"><span className='textLight'>OBJECTIFS</span></Link>
                <span className='textGras'>SUCCÈS</span>
            </div>
            <div className='container-succes'>
                <div>NOMBRE DE VUES</div>
                <div className='container-list-succes'>
                    <CardSuccess state={"end"} nb={10} date={'10/02/2022'}/>
                    <CardSuccess state={"active"} nb={50} date={' '}/>
                </div>
            </div>
        </div>
    );
}

export default Succes