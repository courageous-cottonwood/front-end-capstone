import React, { useState, useEffect } from 'react';
import DummyReviews from './DummyReviews.js';
import Review from './Review.jsx';
import styles from './RR.module.css';
import axios from 'axios';
import AddReview from './addReview.jsx';

const Reviews = ({product_id, reviews, handleMoreQuestions, review_meta, handleSort}) => {


    return (

      <div className={styles.ReviewsContainer}>
        <div className={styles.sortContainer}>
        <select onChange={handleSort}>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
          <option value="relevant">relevant</option>
        </select>
      </div>
        {reviews.results.map( (review) =>
          <Review review={review} />
        )}
        <button onClick={handleMoreQuestions} className={styles.button}> More Reviews</button>
        <button className={styles.button}> Add Review </button>
        <AddReview product_id={product_id} review_meta={review_meta}/>
      </div>

    );

}

export default Reviews;