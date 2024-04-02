import React from 'react'
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>setPlayState(true)}/>
    </div>
    <div className='about-right'>
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nututring Tomorrow's Leaders Today</h2>
    <p>Embark on a transformative educational journey with OUR
    university's comprehensive education programs. Our cutting-edge
    curriculum is designed to empower students with the knowledge, 
    skills, and experiences needed to excel in the dynamic field Offereducation.</p>
    <p>With a focus on innovation, hands-on learning, and personalize
    mentorship, our programs prepare aspiring educator to make a
     meanningful impact in classrooms, schools, and communities</p>
     <p>Whether you aspire to become a teacher, administrator,
     counselor, or educational leader, our diverse renage of programs
     offers the perfect pathway to achieve your goals and unlock your
     full potential in shaping the future of education.</p>
    </div>
      
    </div>
  )
}

export default About
