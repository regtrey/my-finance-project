import React from 'react';
import classes from './Partners.module.css';
import microsoft from '../img/microsoft.svg';
import mastercard from '../img/mastercard.svg';
import intel from '../img/intel.svg';
import linkedin from '../img/linkedin.svg';

const Partners = () => {
  return (
    <div className={classes.partnersContainer}>
      <div className={classes.partnersHeadingContainer}>
        <h2 className={classes.partnersHeading}>
          Trusted by over 650 companies
        </h2>
        <p className={classes.partnersSubheading}>
          we have been trusted by top companies in different industries in
          providing financial solutions
        </p>
      </div>

      <div className={classes.partnersLogoContainer}>
        <img
          src={microsoft}
          alt="microsoft-logo"
          className={classes.partnersLogo}
        />
        <img
          src={mastercard}
          alt="mastercard-logo"
          className={classes.partnersLogo}
        />
        <img src={intel} alt="intel-logo" className={classes.partnersLogo} />
        <img
          src={linkedin}
          alt="microsoft-logo"
          className={classes.partnersLogo}
        />
      </div>
    </div>
  );
};

export default Partners;
