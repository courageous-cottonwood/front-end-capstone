import React from 'react';
import styles from './RR.module.css';

const Review = ({review}) => {
  // console.log(review);
  return (
    <div className={styles.ReviewContainer}>
      <div>{review.rating}</div>
      <div>{review.date}</div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>{review.reviewer_name}</div>

    </div>

  );
}

export default Review;