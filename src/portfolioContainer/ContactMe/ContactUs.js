import React, { useRef,useState } from 'react';
import "./ContactUs.css";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
init("gSNpD8XBfkAQriDQ5");
AOS.init();
const ContactUs = () => {
  const form = useRef();

  const [data,setData] = useState(
    {name:"", 
    email:"",
    message:""
  }
  )
  const getState = (e) => {
    setData ({...data,[e.target.name]:e.target.value})
  } 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oly5l78', 'template_4uwxa6v', form.current, 'gSNpD8XBfkAQriDQ5')
      .then((result) => {
          alert("Message Sent")
          setData( {name:"", 
          email:"",
          message:""
        })
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-container' id='Contact' data-aos="zoom-in">
      <div className='Contact'>
       <div className="About-title">
        <span>Contact Me</span>
      </div>
      <div className="About-Why">
        <span>Send me an E-mail</span>
      </div>
      <div className="hide-line">
        <div className="line"></div>
        <div className="blob-line">
          <div></div>
        </div>
      </div>
      </div>
    <form className='container' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" value={data.name} onChange={getState} />
      <label>Email</label>
      <input type="email" name="email" value={data.email} onChange={getState} />
      <label>Message</label>
      <textarea className='message' name="message" value={data.message} onChange={getState} />
          <div className="profile-options">
            <button className="btn primary-btn" type="submit" value="submit">
              {""}
              Hire me{""}
            </button>
            {/* button utiliser pour telecharger un resumee , un cv ou document */}
              {/* <a href="https://www.flickr.com/photos/samzek">
              <button className="btn highlighted-btn">Go to Flicker!</button>
              </a> */}
          </div>
       
    </form>
    </div>
  );
};
export default ContactUs