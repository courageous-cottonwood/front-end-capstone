import React, { useState, useEffect } from 'react';
import styles from './RR.module.css';
import axios from 'axios';
import Stars from '../Utilities/Stars.jsx';


const Ratings = ({product_id, review_meta}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     review_meta: 0,
  //   }
  //   this.getReviewMeta = this.getReviewMeta.bind(this);
  //   this.getRatingCount = this.getRatingCount.bind(this);
  //   this.getAverageRating = this.getAverageRating.bind(this);
  // }
    // const [review_meta, setReviewMeta] = useState(0);


  // const getReviewMeta = (productID) => {
  //   // console.log('get review meta running');
  //   axios.get('/reviews/meta', {
  //     params: {
  //       product_id: productID
  //     }
  //   })
  //   .then( (response) => {
  //     // console.log(response.data);
  //     // this.setState({review_meta: response.data});
  //     setReviewMeta(response.data);

  //   });
  // }

  // // componentDidMount() {
  // //   this.getReviewMeta();
  // // }
  //   useEffect( () => {
  //     getReviewMeta(product_id);
  //   }, [product_id]);

  //   useEffect( () => {
  //     getReviewMeta(product_id);
  //   }, []);

  const getRatingCount = (star) => {
    // console.log(review_meta);
    if(review_meta !== 0) {
      return review_meta.ratings[star] || 0;
    }
    return 0;
  }

  const getAverageRating = () => {
    if(review_meta !== 0) {
      let totalSum = 0;
      let totalReviews = 0;
      let ratings = review_meta.ratings;
      for(let stars in ratings) {
        totalSum += (parseInt(stars) * parseInt(ratings[stars]));
        totalReviews += parseInt(ratings[stars]);
      }
      return totalSum/totalReviews;
    }
    return 0;
  }

  const getCharacteristics = () => {
    let results = [];

    for(let charact in review_meta.characteristics) {
      let charactValue = review_meta.characteristics[charact].value;
      results.push(`${charact}: ${charactValue.slice(0,4)}`);
    }
    return results;
  }


  // render () {
    // console.log(this.state.review_meta.ratings);

    return (
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingsNumberAndStarsContainer}>
          <span className={styles.ratingsNumber}>{getAverageRating().toFixed(1)}</span>
          <div className={styles.stars}>
            <Stars rating={getAverageRating()} size={24} color="pink"/>
          </div>
        </div>
        <div className={styles.ratingsRecommend} >
          <span> {review_meta !== 0 ? review_meta.recommended.true : 0}% of reviews recommend this product </span>
        </div>
        <div className={styles.ratingBreakdown}>
          <div> 1 star: {getRatingCount(1)}</div>
          <div> 2 star: {getRatingCount(2)}</div>
          <div> 3 star: {getRatingCount(3)}</div>
          <div> 4 star: {getRatingCount(4)}</div>
          <div> 5 star: {getRatingCount(5)}</div>
        </div>
        <div className={styles.characteristicBreakdown}>
          {getCharacteristics().map( (text) => {
            return <div>{text} </div>;
          })}
        </div>
      </div>
    );
  // }
}


export default Ratings;