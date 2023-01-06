import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';



function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_820at6s', 'template_am8y4td', form.current, 'vndMJD84oStKk7fuD')
    
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact_container">
        <div className="contact_options">
          <article className="Contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>randomemail@gmail.com</h5>
            <a href="mailto:randomemail@gmail.com" target="_blank">send a message</a>
          </article>

          <article className="Contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Tutorials</h5>
            <a href="https://www.facebook.com/" target="_blank">send a message</a>
          </article>

          <article className="Contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3216079678</h5>
            <a href="https://api.whatsapp.com/send?phone=+573216079678" target="_blank">send a message</a>
          </article>


        </div>
        {/* END OF CONATCT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your email'reqiuired/>
            <textarea type="message" rows='7' placeholder='Your message' required></textarea>
            <button type="submit" id='btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact