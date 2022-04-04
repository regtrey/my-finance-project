import React from 'react';
import classes from './Product.module.css';
import product from '../img/wireframe.svg';

const Product = () => {
  return (
    <div className={classes.productContainer}>
      <div className={classes.productHeadingContainer}>
        <h2 className={classes.productHeading}>
          The best free finance
          <br /> software in the internet
        </h2>
        <p className={classes.productSubheading}>
          A very intuitive financial software for all kinds of users
          <br /> from personal use to businesses.
        </p>
      </div>

      <div className={classes.productImgContainer}>
        <img src={product} alt="product-img" className={classes.productImg} />
      </div>
    </div>
  );
};

export default Product;
