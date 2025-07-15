import {Link} from 'react-router-dom';
import './Navbar.css';
import { FaGithub,FaLinkedinIn  } from "react-icons/fa";


export default function Navbar(){
    return(
        <nav className="">
            <div className="nav-container">
                <h1 className='logo'>
                    <Link to='./'>Eureka</Link> <span className='dot'>.</span>
                </h1>
                <div className='nav-links'>
                    <Link to='./About.js'>About</Link>
                    <Link to='./Projects.js'>Portfolio</Link>
                    <Link to='https://github.com/eureka03'><FaGithub/></Link>
                    <Link to='https://www.linkedin.com/in/eureka-baloyi-190a74203/'><FaLinkedinIn /></Link>
                    <button>Hire me </button>
                </div>
            </div>
        </nav>
    )
}