import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import styles from './RR.module.css';

const Ratings_and_Reviews = ({product_id}) => {



  return (
    <div className={styles.ratingsAndReviewsContainer}>
      <Ratings product_id={product_id}/>
      <Reviews product_id={product_id}/>
    </div>

  );

}


export default Ratings_and_Reviews;