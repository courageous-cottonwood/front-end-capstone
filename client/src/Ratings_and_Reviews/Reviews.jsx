import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import styles from './RR.module.css';
import axios from 'axios';
import AddReview from './addReview.jsx';

const Reviews = ({product_id, reviews, handleMoreQuestions, review_meta, handleSort, handleHelpfulness, handleReport, reloadAll}) => {

  const [showReviewForm, setShowReviewForm] = useState(false);

  const showModal = () => {
    setShowReviewForm(!showReviewForm);
  };

  if(reviews !== 0 && reviews !== null && reviews.length > 0) {
    return (
      <div className={styles.ReviewsContainer}>
        <div className={styles.sortContainer}>
        <select className={styles.select} onChange={handleSort}>
        <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>

        </select>
      </div>
        {reviews.map( (review) =>
          <Review review={review} handleHelpfulness={handleHelpfulness} handleReport={handleReport} key={review.review_id}/>
        )}
        <div className={styles.buttonContainer}>
          <button onClick={handleMoreQuestions} className={styles.button}> More Reviews</button>
          <button className={styles.button} onClick={showModal}> Add Review </button>
        </div>
        {showReviewForm ?
          <div className={styles.modal_background}>
            <div className={styles.modal_content}>
            <AddReview product_id={product_id} review_meta={review_meta} showModal={showModal} reloadAll={reloadAll}/>
            </div>
          </div>
          :
          <div>
          </div>
          }
      </div>
    );
  } else {
    return (
      <div className={styles.ReviewsContainer}>
        <div className={styles.sortContainer}>
        <select className={styles.select} onChange={handleSort}>
          <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </div>
        <p> No Reviews found </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={showModal}> Add Review </button>
        </div>
        {showReviewForm ?
          <div className={styles.modal_background}>
            <div className={styles.modal_content}>
            <AddReview product_id={product_id} review_meta={review_meta} showModal={showModal} reloadAll={reloadAll}/>
            </div>
          </div>
          :
          <div>
          </div>
          }
      </div>
    );
  }

}

export default Reviews;