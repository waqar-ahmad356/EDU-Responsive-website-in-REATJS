import React from 'react'
import './Testimonial.css';
import { useRef } from 'react';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/ayesha.png';

import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import user5 from '../../assets/waqar_user1.jpg';

const Testimonial = () => {
const slider=useRef();
let tx=0;


    const slideforward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }
    const slidebackward=()=>{
        if(tx<0)
        {
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
        
    }



  return (
    <div className='testimonials'>
    <img src={next_icon} alt='' className='next-btn' onClick={slideforward}></img>
    <img src={back_icon} alt='' className='back-btn' onClick={slidebackward}></img>
    <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user1} alt=''/>
                        <div>
                            <h3>Ayesha Siddiqa</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Edusity was one of 
                        the best decision I've ever made. The supportive 
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely axceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user5} alt=''/>
                        <div>
                            <h3>Waqar Ahmad</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Edusity was one of 
                        the best decision I've ever made. The supportive 
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely axceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user3} alt=''/>
                        <div>
                            <h3>Mahnoor </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Edusity was one of 
                        the best decision I've ever made. The supportive 
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely axceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user4} alt=''/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Edusity was one of 
                        the best decision I've ever made. The supportive 
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely axceeded my expectations.
                    </p>
                </div>
            </li>
        </ul>
    </div>
      
    </div>
  )
}

export default Testimonial
