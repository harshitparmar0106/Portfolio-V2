import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id = "contact">
        <div className="section__wrapper contact__container">
            <div className="section__header">
                <h2 className="primary__title">Contact Me</h2>
                <p className='text__muted description'>
                Ready to take your digital presence to the next level? Whether 
                you're looking to launch a new website, revamp an existing one, or need expert advice 
                on the best web technologies, I'm here to help. Reach out to discuss your project, ask 
                questions, or just say hello.
                </p>
            </div>
            <div className="contact__group">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__icon'/>
                        <h3>Email</h3>
                        <h5>harshitparmar2162004</h5>
                        <a href="mailto:harshitparmar2162004" target='_blank'className='send_btn btn'>Send Message</a>
                    </article>
                    <article className="contact__option">
                        <FaLocationDot className="contact__icon"/>
                        <h3 >Address</h3>
                        <small>ISI-6, Sitapura Industrial Area, <br />Jaipur, Rajatshan</small>
                        
                    </article>
                </div>

                <form>
                    <input type="text" name='name' placeholder='enter your full name' required />
                    <input type="email" name='email' placeholder='enter your email' required />
                    <textarea  name='message' rows={7} placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn__primary'>Send Message</button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
