import React from 'react';
import styles from './RR.module.css';

const Ratings = () => {

  return (
    <div className={styles.ratingsContainer}>Ratings Container
      <div className={styles.ratingsNumberAndStarsContainer}>
        <div className={styles.ratingsNumber}>Rating Number</div>
        <div className={styles.stars}> Stars</div>
      </div>
    </div>
  );

}

export default Ratings;