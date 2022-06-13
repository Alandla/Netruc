import { Link } from 'react-router-dom';

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'

// Component
import CompTrophe from '../component/CompTrophe';

const Trophe = () => {

    return (
        <div className='Trophe'>
            <div className='navObjSucc'>
                <span className='textGras'>OBJECTIFS</span>
                <Link to="/Succes"><span className='textLight'>SUCCÈS</span></Link>
            </div>
            <CompTrophe valeur={4} valeurMax={10} type={'vues'} texte1={"NOMBRE DE VUES"} description={"Regarde 10 vidéos dans la journée."} exp={50} state={""} />
            <CompTrophe valeur={5} valeurMax={5} type={'favoris'} texte1={"NOMBRE DE FAVORIS"} description={"Ajoute 5 vidéos dans tes favoris dans la journée."} exp={100} state={"end"} />
        </div>
    );
};

export default Trophe