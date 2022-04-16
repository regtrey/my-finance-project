import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerLinksContainer}>
        <ul className={classes.links}>
          <li className={classes.linksList}>
            <NavLink to="/" className={classes.link}>
              home
            </NavLink>
          </li>
          <li className={classes.linksList}>
            <NavLink to="/" className={classes.link}>
              product
            </NavLink>
          </li>
          <li className={classes.linksList}>
            <NavLink to="/" className={classes.link}>
              features
            </NavLink>
          </li>
          <li className={classes.linksList}>
            <NavLink to="/" className={classes.link}>
              contact
            </NavLink>
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
