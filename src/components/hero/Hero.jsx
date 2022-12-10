import React from 'react'
import Header from '../header/Header'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import './hero.css'
import {motion, useSpring} from 'framer-motion'
const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '9px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal</span>
            <span> body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={2} preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay={2} preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay={2} preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join now</button>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="hero_img" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
