import {Link} from 'react-router-dom';
import './Navbar.css';
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
                </div>
            </div>
        </nav>
    )
}