import React from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import styles from './RR.module.css';

const Ratings_and_Reviews = () => {

  return (
    <div className={styles.ratingsAndReviewsContainer}>
      <Ratings/>
      <Reviews/>
    </div>

  );

}


export default Ratings_and_Reviews;