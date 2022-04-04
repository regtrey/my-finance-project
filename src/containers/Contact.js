import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactTextContainer}>
        <h2 className={classes.contactHeading}>Get in touch</h2>
        <p className={classes.contactSubheading}>
          Let's get you started and help you with ease with MyFinance financial
          solutions.
        </p>
        <button className={classes.contactBtn}>get started</button>
      </div>
    </div>
  );
};

export default Contact;
