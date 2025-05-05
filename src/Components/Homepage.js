import {motion} from 'motion/react';
import Profile from '../Assets/profile.png';
import './Homepage.css';
import { MdArrowRightAlt } from "react-icons/md";

 

export default function Homepage(){
    return(
        <div className="Home">
            <div className="text-content">
                <motion.h1>
                    I am a full stack
                </motion.h1>
                <motion.h1>
                Web
                </motion.h1>
                <motion.h1>
                developer
                </motion.h1>
                <motion.button>About me <MdArrowRightAlt/></motion.button>
            </div>
            <div className='image'>
                <motion.img
                    src={Profile}>
                    
                </motion.img>
            </div>
            
        </div>
    )
}