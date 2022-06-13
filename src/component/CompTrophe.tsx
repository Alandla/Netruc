import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import '../style/Trophe.css'


const CompTrophe = ({ valeur, valeurMax, type, texte1, description, exp, state }: any) => {

    var button;
    if(state === "end"){
        button =  <div className='Recup'>Récupérer</div>;
    }

    return (
        <>
            <div className={'Objectif ' + state}>
                <CircularProgressbar value={valeur} text={`${valeur}`} maxValue={valeurMax} className='circleBar flexTroph' styles={buildStyles({
                    textColor: "#DB202C",
                    pathColor: "#DB202C",
                    trailColor: "#000000"
                })} />
                <div className='text'>
                    <div>
                        <img src={'../../img/objectifs/icon_' + type + '.png'} />
                        <span className='texteTitre'> {'Nombre de ' + type} </span>
                    </div>
                    <span className='texteDesc'> {description} </span>
                </div>
                <div className='Right flexTroph'>
                    <span>Récompense</span>
                    <div className='circle'>
                        <p className='text-exp'>+{exp} XP</p>
                    </div>
                </div>
            </div>
            {button}
        </>
    );
};

export default CompTrophe