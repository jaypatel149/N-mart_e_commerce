import React from 'react'
import './Contact.css'

const About = () => {
  return (
    <div style={{marginTop:"6rem",marginBottom:"15rem"}}>
      <div className='container'>
        <div className='row'>
            <h1 className='text-center mb-4'>About Us</h1>
          <div className='col-lg-6 col-sm-12'>
            <h2 className='mb-3'>Jay patel</h2>
            <h3 className='mb-3'>Front-End Developer (React Js)</h3>
            <h5>I am jaypatel I am from utter pradesh and current Leave Himanchal Pradesh in dharamsala mai navgurukul me rahakar coading karata hu jaise python ,javascript,HTML,CSS, Bootstrap5,Matarial UI ,Reactjs ,Redux sikha</h5>
          </div>
          <div className='col-lg-6 col-sm-12'>
          <div className='about-logo'>
            <img src='/assests/about.png' alt='about' />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
