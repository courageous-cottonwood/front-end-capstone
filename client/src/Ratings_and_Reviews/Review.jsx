import React from 'react';
import styles from './RR.module.css';

const Review = ({review}) => {
  // console.log(review);
  return (
    <div className={styles.ReviewContainer}>
      <div className={styles.ReviewStarAndDateContainer}>
        <div className={styles.ReviewRating}>{review.rating}</div>
        <div>{review.date}</div>
      </div>
      <div className={styles.ReviewSummary}>
        <span className={styles.ReviewSummarySpan}>{review.summary}</span>
        </div>
      <div className={styles.ReviewBody}>{review.body}</div>
      <div>
      <span className={styles.ReviewUserSpan}>{review.reviewer_name}</span>
      </div>

    </div>

  );
}

export default Review;