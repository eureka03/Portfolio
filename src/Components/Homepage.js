import {motion} from 'motion/react';
import Profile from '../Assets/profile.png';
import './Homepage.css';


 

export default function Homepage(){
    return(
        <div className="Homepage">
            <div className="Home">
                <div className="designer">
                    <h1>Designer</h1>
                    <p>UI/UX Designer with a passion for<br/> designing 
                        beautiful and functional<br/> user interfaces
                    </p>
                </div>
                <div className='image'>
                    
                    <motion.img 
                        src={Profile}>
                    </motion.img>
                </div>
                <div className='coder'>
                    <h1>&lt;Coder&gt;</h1>
                    <p>Software Developer who focuses<br/> on writing clean
                        and , elegant and <br/>efficient code.
                    </p>
                </div>
                
            </div>
            <div className="socials">

            </div>
        </div>
    )
}