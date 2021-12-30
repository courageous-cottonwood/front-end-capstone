import React from 'react';
import styles from './RR.module.css';
import dayjs from 'dayjs';
import Stars from './Stars.jsx';



const Review = ({review}) => {
  // console.log(review);

  let date = dayjs(review.date).format('MMM DD, YYYY');
  return (
    <div className={styles.ReviewContainer}>
      <div className={styles.ReviewStarAndDateContainer}>
        <div className={styles.ReviewRating}>
          <Stars rating={review.rating}/>
        </div>
        <div>{date}</div>
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