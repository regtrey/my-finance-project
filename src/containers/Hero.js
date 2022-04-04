import React from 'react';
import classes from './Hero.module.css';
import heroImg from '../img/hero.svg';

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroTitleContainer}>
        <h1 className={classes.heroTitle}>
          Achieve financial greatness with{' '}
          <span className={classes.myFinance}>myFinance</span>
        </h1>
        <p className={classes.heroSubtitle}>track your finances on the go</p>
        <button className={classes.heroBtn}>our product</button>
      </div>
      <div className={classes.heroImgContainer}>
        <img src={heroImg} alt="hero" className={classes.heroImg} />
      </div>
    </div>
  );
};

export default Hero;
