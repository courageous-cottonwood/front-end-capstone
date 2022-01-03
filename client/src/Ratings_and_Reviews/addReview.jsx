import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RR.module.css';

const AddReview = ({product_id}) => {

  const [newReview, setNewReview] = useState({
    rating: 0,
    recommend: '',
    characteristics: '',
    summary: '',
    body: '',
    name: '',
    email: '',
    photos: '',
    product_id:product_id
  });

  const [allowSubmit, setAllowSubmit] = useState(false);

  const updateForm = (e) => {
    let newObject = { ...newQuestion };
    newObject[e.target.name] = e.target.value;
    setNewReview(newObject);
  }

  const handleStarRatingSelect = (e) => {
    if(e.target.value !== 'Select Star Rating') {
      let newObject = { ...newReview };
      newObject.rating = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }

  const handleRecommendSelect = (e) => {
    if(e.target.value !== 'Select Recommendation') {
      let newObject = { ...newReview };
      let map = {
        true: true,
        false: false,
      };
      newObject.recommend = map[e.target.value];
      setNewReview(newObject);
    }
  }

  return (

    <div className={styles.addReview}>
      <div className={styles.addReviewHeader}>
        <h3> Write Your Review</h3>
        <span className={styles.closeReview}> X </span>
      </div>
      {/* <input name="rating" required/> */}
      <label> Overall Rating</label>
      <select onChange={handleStarRatingSelect}>
        <option value="Select Star Rating">Select Star Rating</option>
        <option value="1">1 star - Poor </option>
        <option value="2">2 stars - Fair</option>
        <option value="3">3 stars - Average</option>
        <option value="4">4 stars - Good</option>
        <option value="5">5 stars - Great</option>
      </select>
      <label> Do you Recommend this product?</label>
      <select onChange={handleRecommendSelect}>
        <option value ="Select Recommendation">Select Recommendation</option>
        <option value ="true">I recommend this product</option>
        <option value="false">I don't recommend this product</option>
      </select>
      <label> Characteristics</label>
      <input name="characteristics" required/>
      <label> Review Summary</label>
      <input name="summary" />
      <label> Review Body</label>
      <input name="body" required />
      <label> Display Name</label>
      <label> For privacy reasons do not use your full name or email address</label>
      <input name="name" required />
      <label> Email </label>
      <label> For authentication reasons, you will not be emailed</label>
      <input name="email" required />
      <button> Submit Review</button>
    </div>
  )

}




export default AddReview;