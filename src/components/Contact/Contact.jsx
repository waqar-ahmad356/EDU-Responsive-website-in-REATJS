import React from 'react'
import './Contact.css';
import message_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "838c9423-38e1-4754-bcd3-816f74ac2acb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us a message <img src={message_icon} alt=''></img></h3>
        <p>Feel free to reach out through contact from or find our contact
        information below. Your feedback,questions, and suggestions are
        important to us as we strive to provide exceptional service  to our 
        university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt=''></img>waqarah356@yahoo.com</li>
            <li><img src={phone_icon} alt=''></img>+92 3094247356</li>
            <li><img src={location_icon} alt=''></img>Al-Noor Orchard Sharaqpur Road <br/>Lahore, Punjab, Pakistan</li>
        </ul>
    </div>
    <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your Name' required></input>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Mobile Number' required></input>
            <label>Write your Message here</label>
            <textarea name='message' rows='10' placeholder='Enter your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt=''></img></button>

        </form>
        <span>{result}</span>
    </div>
      
    </div>
  )
}

export default Contact
