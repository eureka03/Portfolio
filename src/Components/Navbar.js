import {Link} from 'react-router-dom';
import './Navbar.css';
export default function Navbar(){
    return(
        <nav className="">
            <div className="nav-container">
                <h1 className='logo'>
                    Eureka <span className='dot'>.</span>
                </h1>
                <div className='nav-links'>
                    <Link to='./'>Home</Link>
                    <Link to='./About.js'>About</Link>
                    <Link to='./Projects.js'>Projects</Link>
                </div>
            </div>
        </nav>
    )
}