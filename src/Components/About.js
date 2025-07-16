import './About.css';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaSalesforce } from "react-icons/fa";


export default function About(){
    return (
        <>
            <div className='About-container'>
                <div className='skills'>
                    <div className='web'>
                        <span><LiaLaptopCodeSolid size={30}/></span>
                        <h3>Web Development</h3>
                    </div>
                    <div className='mobile'>
                        <span><IoPhonePortraitOutline size={30}/></span>
                        <h3>Mobile Development</h3>
                    </div>
              
                    <div className='cloud'>
                        <span><FaSalesforce size={30}/></span>
                        <h3>Salesforce Develpment</h3>
                    </div>
              </div>
              <div className='About'>
                <h2>So Who am I?</h2>
                <p>Hi , I'm Eureka Baloyi , a passionate Full Stack<br/>
                    Developer based in Johannesburg, South Africa.
                </p>
                <p>
                    I specialize in creating dynamic and user-friendly<br/>
                    web applications using JavaScript, React and Node.js<br/>
                    I also have professional experience as a Salesforce <br/>
                    Developer, where I learned the importance of scalable architecture<br/>
                    clean code, and delivering real-world business solutions.<br/>

                </p>
              </div>
              
            </div>
        </>

    );
}