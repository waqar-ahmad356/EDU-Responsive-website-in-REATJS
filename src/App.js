import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
const [playstate,setPlayState]=useState(false);

  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
    <Title subTitle='OUR PROGRAM' title='What We Offer'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='GALLERY' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIAL' title='What Students Says'/>
    <Testimonial/>
    <Title subTitle='Contact us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
    <VideoPlayer playstate={playstate} setPlayState={setPlayState}/>
   
      
    </div>
  )
}

export default App
