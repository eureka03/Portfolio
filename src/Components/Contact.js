export default function Contact(){
    return(
        <>
            <div className='Contact-container'>
                <h1>Contact me</h1>
                <form className='Contact-form'>
                    <div className='form-input'>
                        <label htmlFor="name">Name</label>
                        <input type='text' id='name' name='name' placeholder='Your Name' required/>

                    </div>
                    <div className='form-input'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Your email address' required/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' placeholder='Your message' required></textarea>
                    </div>

                </form>
            </div>
        
        </>
    );
}