import React, { useRef } from 'react'
import "./Header.css"
import {profile1} from '../../images/index.js'
import Facts from './Facts/index.jsx'
import { delay, motion } from "framer-motion"
import resume from './resume.pdf';


const container = (delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
            x:0,
            opacity:1,
            transition:{duration:1,delay:delay},
    }
})

const Header = () => {
    


  return (
    <header id='header' className='blur-effect'>
            <motion.div 
            initial={{scale:.5}}
            animate={{scale:1}}
            transition={{duration:.8,delay:.7}}
            className="stroke__text intro__text">HELLO</motion.div>
            <div className="section__wrapper header__container">
                <motion.div 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="column intro__container blur-effect">
                    <div className="header__info">
                        <div className="header__info__top">
                          <span className='color__primary'>Hello There! I'm</span>  Harshit Parmar
                        </div>
                        <div className="header__info__middle">
                            <h1 className='primary__title header__title'>I'M a WEB DEVELOPER <br />& <br />CYBER SECURTIY ENTHUSIASTS </h1>
                            <p className='text__muted header__description'>I dissect intricate user experience challeges to engineer integrity-focused solutions that resonate with billions of users</p>
                        </div>
                        <Facts/>
                        <div className="header__info__bottom">
                            <div className='btn btn__primary'><a href={resume}>Resume</a></div>
                            <a href="mailto:harshitparmar2162004@gmail.com" className='btn btn__primary'>Email Me</a>
                        </div>
                    </div>
                </motion.div>      
                <motion.div
                 initial={{x:100,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{delay:.7,duration:1}}
                className="cloumn profile__wrapper">
                    <div className="profile__photo__container">
                        <img src={profile1} className='profile__photo' alt="" />
                    </div>
                </motion.div>
            </div>
    </header>
  )
}

export default Header
