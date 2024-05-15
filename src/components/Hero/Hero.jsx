import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import {motion} from 'framer-motion';
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import NumberCounter from 'number-counter';

import Calories from "../../assets/calories.png";

const Hero = () => {
  const transition = {type:'spring', duration:3};
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"165px":'238px'}}
          transition={{...transition , type:'tween'}}
          whileInView={{left:'8px'}}
          
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={50} delay='5' preFix='+' />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
            <NumberCounter end={978} start={200} delay='5' preFix='+' />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
            <NumberCounter end={50} start={0} delay='5' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero button */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
        transition={transition}
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <motion.img
          src={hero_image_back}
          initial={{right:"11rem"}}
          transition={transition}
          whileInView={{right:'20rem'}}
          alt="hero_image_back"
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
         initial={{right:"37rem"}}
         transition={transition}
         whileInView={{right:"23rem"}}
        className="calories">
          <img src={Calories} alt="Calories" />

          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>

        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
