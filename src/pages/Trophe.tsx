import React from 'react';
import { Link } from 'react-router-dom';

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'

// Component
import CompTrophe from '../component/CompTrophe';

const Trophe = () => {

    return (
        <div className='Trophe'>
            <div className='titreTrophe'>
                <span className='textGras'>OBJECTIFS</span>
                <Link to="/Succes"><span className='childTitreTrophe'>SUCCÈS</span></Link>
            </div>
                <CompTrophe valeur={4} valeurMax={10} image={1} texte1={"NOMBRE DE VUES"} texte2={"Regarde 10 vidéos dans la journée."} exp={50} border={1}/>
                <CompTrophe valeur={5} valeurMax={5} image={2} texte1={"NOMBRE DE FAVORIS"} texte2={"Ajoute 5 vidéos dans tes favoris dans la journée."} exp={100} border={2}/>    
        </div>
    );
};

export default Trophe