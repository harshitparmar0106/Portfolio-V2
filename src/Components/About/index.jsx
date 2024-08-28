import React from 'react'
import "./About.css"
import { profile1 } from '../../images'

const About = () => {
  return (
   <section id = 'about'> 
        <div className="section__wrapper">
            <div className="me__container blur-effect">
            </div>
            <div className="section__header">
                
                        <h2 className='primary__title'>About Me</h2>
                        <h1 className='title'>I am <span className="color__primary">Harshit Parmar</span></h1>
                        <p className="text__muted description">Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and
                            responsive applications. Proficient in multiple programming languages and frameworks, 
                            as well as database design and management. Strong problem-solving and analytical skills, 
                            and a track record of delivering high-quality code on time and on budget.
                            <br />
                            <br />
                            I am a dedicated and ambitious B.Tech. student specializing in Cyber Security at Poornima College of Engineering. With a robust academic background, including an impressive CGPA of 8.9, and a solid foundation in both frontend and backend development, I am passionate about creating secure, responsive, and user-centric web applications.

                            My expertise spans a wide range of technologies, including HTML5, CSS, JavaScript, React.js, Python, Node.js, and SQL, to name a few.
                            <br />
                            <br />

                            In addition to my academic and technical prowess, I have gained practical experience through freelance work, notably as a Shopify Developer, where I helped clients optimize their online stores, significantly increasing their sales. I am also a certified Ethical Hacker, bringing a security-first mindset to every project I undertake.
                            <br />
                            <br />

                            My leadership and organizational skills have been honed through various roles, including Lead Organizer for Hackathons and cultural festivals, where I demonstrated my ability to manage teams and execute large-scale events successfully.
                            <br />
                            <br />
                            Driven by a strong desire to continuously learn and adapt in the ever-evolving tech landscape, I am committed to leveraging my skills and experiences to make meaningful contributions to the field of Cyber Security and software development.
                            </p>
                 
            </div>
        </div>
   </section>
  )
}

export default About
