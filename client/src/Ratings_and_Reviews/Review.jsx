import React, { useState, useEffect } from 'react';
import styles from './RR.module.css';
import dayjs from 'dayjs';
import Stars from '../Utilities/Stars.jsx';



const Review = ({review, handleHelpfulness, handleReport}) => {


  // console.log(review);



  let date = dayjs(review.date).format('MMM DD, YYYY');
  return (
    <div className={styles.ReviewContainer}>
      <div className={styles.ReviewStarAndDateContainer}>
        <div className={styles.ReviewRating}>
          <Stars rating={review.rating} size={16} color="#9484cd"/>
        </div>
        <span className={styles.dateSpan}>{date}</span>
      </div>
      <div className={styles.ReviewSummary}>
        <span className={styles.ReviewSummarySpan}>{review.summary}</span>
        </div>
      <div className={styles.ReviewBody}>{review.body}</div>
      <div className={styles.reviewRecommendContainer}>
        {review.recommend ? <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9484cd" viewBox="0 0 24 24"><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></svg><span>I recommend this product </span></div> : <div></div>}
      </div>
      <div className={styles.usernameAndHelpful}>
        <span className={styles.ReviewUserSpan}>by {review.reviewer_name}</span>
        <div className={styles.helpfulContainer}>
          <span className={styles.helpfulSpan}> Helpful? </span>
          <a className={styles.helpfulSpan} onClick={ () => {
            handleHelpfulness(review.review_id); }} href="#/"> Yes </a>
          <span className={styles.helpfulSpan}> ({review.helpfulness})</span>
          <a className={styles.helpfulSpan} onClick={ () => {
            handleReport(review.review_id);} }href="#/"> Report </a>
        </div>
      </div>

    </div>

  );
}

export default Review;