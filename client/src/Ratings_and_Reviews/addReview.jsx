import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RR.module.css';

const AddReview = ({product_id, review_meta, showModal, reloadAll}) => {

  const [newReview, setNewReview] = useState({
    rating: '',
    recommend: '',
    characteristics: {},
    summary: '',
    body: '',
    name: '',
    email: '',
    photos: [],
    product_id:product_id
  });

  const [allowSubmit, setAllowSubmit] = useState(false);


  const submitForm = () => {
    axios.post('/reviews', newReview)
    .then((res) => {
      if(res.data === 'Created') {
        console.log('posted review');
        showModal();
        reloadAll();
      }
    })
  }

  const updateForm = (e) => {
    let newObject = { ...newReview };
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
      let newObject = { ...newReview };
      let map = {
        true: true,
        false: false,
      };
      newObject.recommend = map[e.target.value];
      setNewReview(newObject);
  }

  const handleCharacteristicSelect = (e) => {
    if(e.target.value === e.target.name) {
      let newObject = {...newReview};
      let characteristic_id = review_meta.characteristics[e.target.name].id;
      delete newObject.characteristics[characteristic_id];
      setNewReview(newObject);
    }

    if(e.target.value !== e.target.name) {
      let newObject = {...newReview};
      let characteristic_id = review_meta.characteristics[e.target.name].id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }


  return (

    <div className={styles.addReview}>
      <div className={styles.addReviewHeader}>
        <h3> Write Your Review</h3>
        <button className={styles.button_small} onClick={showModal}> X </button>
      </div>
      <div className={styles.reviewForm}>
        <div className={styles.starRatingSelect}>
          <div>
            <label className={styles.label_bold}> Overall Rating*</label>
          </div>
          <select className={styles.select} onChange={handleStarRatingSelect} required>
            <option value="Select Star Rating">--Select Star Rating--</option>
            <option value="1">1 star - Poor </option>
            <option value="2">2 stars - Fair</option>
            <option value="3">3 stars - Average</option>
            <option value="4">4 stars - Good</option>
            <option value="5">5 stars - Great</option>
          </select>
        </div>


          <label className={styles.label_bold}> Do you Recommend this product?*</label>
          <div className={styles.recommendSelectRadio}>
            <div>
              <input type="radio" name="recommendSelect" value="true" onChange={handleRecommendSelect} required></input>
              <label> I recommend this product </label>
            </div>
            <div>
              <input type="radio" name="recommendSelect" value="false" onChange={handleRecommendSelect} ></input>
              <label> I don't recommend this product</label>
            </div>

          </div>

        <div>
          <label className={styles.label_bold}> Characteristics</label>
        </div>
        <div className={styles.reviewFormCharacteristics}>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Size ? <select className={styles.select} name="Size" onChange={handleCharacteristicSelect} required>
            <option value="Size">--Size</option>
            <option value="1">A size too small </option>
            <option value="2">Half a size too small</option>
            <option value="3">Perfect</option>
            <option value="4">Half a size too big</option>
            <option value="5">A size too wide</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Width ? <select className={styles.select} name="Width" onChange={handleCharacteristicSelect} required>
            <option value="Width">--Width--</option>
            <option value="1">Too narrow </option>
            <option value="2">Slightly narrow</option>
            <option value="3">Perfect</option>
            <option value="4">Slightly wide</option>
            <option value="5">Too wide</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Comfort ? <select className={styles.select} name="Comfort" onChange={handleCharacteristicSelect} required>
            <option value="Comfort">--Comfort--</option>
            <option value="1">Uncomfortable </option>
            <option value="2">Slightly Uncomfortable</option>
            <option value="3">Ok</option>
            <option value="4">Comfortable</option>
            <option value="5">Perfect</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Quality ? <select className={styles.select} name="Quality" onChange={handleCharacteristicSelect} required>
            <option value="Quality">--Quality--</option>
            <option value="1">Poor</option>
            <option value="2">Below Average</option>
            <option value="3">What I expected</option>
            <option value="4">Pretty great</option>
            <option value="5">Perfect</option>
          </select> : <div></div> }
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Length ? <select className={styles.select} name="Length" onChange={handleCharacteristicSelect} required>
            <option value="Length">--Length--</option>
            <option value="1">Runs Short </option>
            <option value="2">Runs slightly short</option>
            <option value="3">Perfect</option>
            <option value="4">Runs Slightly long</option>
            <option value="5">Runs long</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Fit ? <select className={styles.select} name="Fit" onChange={handleCharacteristicSelect} required>
            <option value="Fit">--Fit--</option>
            <option value="1">Runs Tight</option>
            <option value="2">Runs slightly tight</option>
            <option value="3">Perfect</option>
            <option value="4">Runs slightly long</option>
            <option value="5">Runs long</option>
          </select> : <div></div> }
          </div>
        </div>


        <label className={styles.label_bold}> Review Summary</label>
        <input name="summary" maxLength="60" placeholder="Example: Best purchase ever!" onChange={updateForm}/>
        <label className={styles.label_bold}> Review Body*</label>
        <textarea name="body" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" required onChange={updateForm}/>
        <span>{newReview.body.length < 50 ? `Minimum required characters left: ${50-newReview.body.length}` : "Minimum Reached"}</span>
        <div>
          <button className={styles.button} >Add Photos</button>
        </div>

        <label className={styles.label_bold}> Display Name*</label>
        <label> For privacy reasons do not use your full name or email address</label>
        <input name="name"  maxLength="60" placeholder="Example:jackson11!" required onChange={updateForm}/>
        <label className={styles.label_bold}> Email </label>
        <label> For authentication reasons, you will not be emailed</label>
        <input name="email" type="email" maxLength="60" placeholder="Example:jackson11@email.com" required onChange={updateForm}/>
        <div className={styles.submitFormContainer}>
          <button className={styles.button} onClick={submitForm}> Submit Review</button>
        </div>

      </div>
    </div>
  )

}




export default AddReview;