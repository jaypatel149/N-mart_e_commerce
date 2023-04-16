import './Contact.css';
import React,{useState} from 'react';


const Contact = () => {
  const [message, setMessage] =useState(false);

  const HandlerSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  };


  return (
    <div className='container px-5' style={{marginTop:"7rem",marginBottom:"10rem"}}>
      <div className='row g-5'>
        <h1 className='text-center'>Have some Question?</h1>
        <hr/>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12' >
          <div className='shake-logo'>
            <img src='/assests/shake.webp' alt='contact' />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12' >
          <div className='text-center  mb-3'><h2>Contact Us</h2></div>
            <form onSubmit={HandlerSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label input_change text-white">Name</label>
                <input type="text" className="form-control" aria-describedby="textHelp" placeholder='Type Name...' />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email Address</label>
                <input type="Email" className="form-control" placeholder='Type Email...' />
              </div>
              <div className="mb-3">
                <label htmlFor="textarea" className="form-label text-white">Message</label>
                <textarea className="form-control"  rows="3" placeholder='Type Message...'></textarea>
              </div>
              <button type="submit" className="btn btn-outline-dark">Send Message</button>
              {message && <p style={{marginTop:"1rem",fontSize:"1.3rem"}}>Thanks, I'll reply ASAP 😊</p>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
