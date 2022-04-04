import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerLinksContainer}>
        <ul className={classes.links}>
          <li className={classes.linksList}>
            <a href="/" className={classes.link}>
              home
            </a>
          </li>
          <li className={classes.linksList}>
            <a href="/product" className={classes.link}>
              product
            </a>
          </li>
          <li className={classes.linksList}>
            <a href="/features" className={classes.link}>
              features
            </a>
          </li>
          <li className={classes.linksList}>
            <a href="/contact" className={classes.link}>
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.copyrightContainer}>
        <p className={classes.copyright}>
          MyFinance © 2022 by Reggie Manigos. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
