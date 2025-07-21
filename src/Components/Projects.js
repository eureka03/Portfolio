import './Projects.css';

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
                    <div className='project'>proj1</div>
                    <div className='project'>proj2</div>
                    <div className='project'>proj3</div>
                </div>
            </div>
        
        </>
    )
}