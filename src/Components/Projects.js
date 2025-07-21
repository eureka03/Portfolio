import './Projects.css';
import Kota from '../Assets/Kota.png';
import BookingSystem from '../Assets/Bookingsystem.png';
import {Link} from 'react-router-dom';

export default function Projects(){
    return(
        <>
            <div className="projects-container">
                
                <div className='header'>
                    <div><hr/></div>
                    <div className='content'>Some of my latest work</div>
                    <div><hr/></div>
                    
                </div>
                
                <div className='projects'>
                    <div className='project'>
                        <img src={Kota} alt='project1'/>
                        <h3>Kota Business</h3>
                        <p>Side project</p>
                        <Link to=''>Check out Kota Business</Link>
                    </div>
                    <div className='project'>
                       <img src='' alt='project2'/>
                        <h3>Trip</h3>
                        <p>Side project</p>
                        <Link to=''>Check out Trip</Link>
                    </div>
                    <div className='project'>
                        <img src={BookingSystem} alt='project3'/>
                        <h3>Salon booking system</h3>
                        <p>Side project</p>
                        <Link to=''>Check out Salon Booking System</Link>
                    </div>
                </div>
            </div>
        
        </>
    )
}