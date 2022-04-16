import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={classes.logo}>
        myFinance
      </NavLink>

      <ul className={classes.nav}>
        <li className={classes.navLinks}>
          <NavLink to="/" className={classes.navLink}>
            home
          </NavLink>
        </li>

        <li className={classes.navLinks}>
          <NavLink to="/" className={classes.navLink}>
            product
          </NavLink>
        </li>

        <li className={classes.navLinks}>
          <NavLink to="/" className={classes.navLink}>
            features
          </NavLink>
        </li>

        <li className={classes.navLinks}>
          <NavLink to="/" className={classes.navLink}>
            contact
          </NavLink>
        </li>

        <li className={classes.navLinks}>
          <NavLink to="/" className={classes.navLink}>
            login
          </NavLink>
        </li>
        <button className={classes.signup}>
          <NavLink to="/">sign up</NavLink>
        </button>
      </ul>
    </header>
  );
};

export default Header;
