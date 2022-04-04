import React from 'react';
import classes from './Features.module.css';
import progress from '../img/progress.svg';
import teams from '../img/teams.svg';
import reports from '../img/reports.svg';

const Features = () => {
  return (
    <div className={classes.featuresContainer}>
      <div className={classes.featuresTitleContainer}>
        <h2 className={classes.featuresTitle}>Features</h2>
      </div>

      <div className={classes.featuresGridContainer}>
        <div className={classes.featuresImgContainer1}>
          <img
            src={progress}
            alt="progress-img"
            className={classes.featuresImgs}
          />
        </div>

        <div className={classes.featuresImgContainer2}>
          <img src={teams} alt="teams-img" className={classes.featuresImgs} />
        </div>

        <div className={classes.featuresImgContainer3}>
          <img
            src={reports}
            alt="reports-img"
            className={classes.featuresImgs}
          />
        </div>

        <div className={classes.featuresTextContainer1}>
          <h3 className={classes.featuresTextTitle}>
            Stay on top on your goals
          </h3>
          <p className={classes.featuresText}>
            Stay ahead with your finances. Be able to track and allocate your
            budget may it be personal or for your business. Lots of tools to
            assist your starting from setting to achieving your goals.
            Integrated tracker, graphs, memo and lots more to help you with.
          </p>
        </div>

        <div className={classes.featuresTextContainer2}>
          <h3 className={classes.featuresTextTitle}>
            Achieve greater heights with your team
          </h3>
          <p className={classes.featuresText}>
            It is a struggle to work alone. Go and invite your team with
            myFinance Teams and accomplish greater things. Boost your sales with
            these powerful tools that will help you from planning to execution
            of sales. Why struggle with manually doing Sales and Marketing? When
            you can do more with myFinance tools.
          </p>
        </div>

        <div className={classes.featuresTextContainer3}>
          <h3 className={classes.featuresTextTitle}>Cash Flow Tracker</h3>
          <p className={classes.featuresText}>
            Easily track your cash flow to make smarter decisions for your
            business and personal finance. A user-friendly UI, myFinance offers
            a straightforward approach on your needs such as adjustment on your
            finances. We are not here to add to your struggles, MyFinance is
            here to help you alleviate such problems and help you make wise
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
