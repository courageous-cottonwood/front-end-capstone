import React, { useState, useEffect } from 'react';
import styles from './RR.module.css';
import axios from 'axios';
import Stars from '../Utilities/Stars.jsx';
import Bars from './Bars.jsx';


const Ratings = ({product_id, review_meta}) => {

  const getRatingCount = (star) => {
    if(review_meta !== 0 && review_meta !== null) {
      return review_meta.ratings[star] || 0;
    }
    return 0;
  }

  const getAverageRating = () => {
    if(review_meta !== 0 && review_meta !== null && Object.keys(review_meta.ratings).length !== 0) {
      let totalSum = 0;
      let totalReviews = 0;
      let ratings = review_meta.ratings;
      for (let stars in ratings) {
        totalSum += (parseInt(stars) * parseInt(ratings[stars]));
        totalReviews += parseInt(ratings[stars]);
      }
      return totalSum/totalReviews;
    }
    return 0;
  }

  const getTotalRating = () => {
    if(review_meta !== 0 && review_meta !== null && Object.keys(review_meta.ratings).length !== 0) {
      let totalReviews = 0;
      let ratings = review_meta.ratings;
      for (let stars in ratings) {
        totalReviews += parseInt(ratings[stars]);
      }
      return totalReviews;
    }
    return 0;
  }

  const getCharacteristics = () => {
    if(review_meta !== 0 && review_meta !== null) {
      let results = [];
      for (let charact in review_meta.characteristics) {
        let charactValue;
        if(review_meta.characteristics[charact].value !== null) {
          charactValue = review_meta.characteristics[charact].value.slice(0, 4);
        } else {
          charactValue = 'No data available';
        }

        results.push(`${charact}: ${charactValue}`);
      }
    return results;
    }
  }

  const getRecommendedPercent = () => {
    if(review_meta !== 0 && review_meta !== null && Object.keys(review_meta.recommended).length !== 0) {
      if(review_meta.recommended.true) {
        if(review_meta.recommended.false) {
          let totalRecommends = parseInt(review_meta.recommended.true) + parseInt(review_meta.recommended.false);
          let totalPositiveRecommends = parseInt(review_meta.recommended.true);
          return ((totalPositiveRecommends/totalRecommends) * 100).toFixed().toString();
        }
        return '100';
      }
    }
    return '0';
  }

    return (
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingsNumberAndStarsContainer}>
          <span className={styles.ratingsNumber}>{getAverageRating().toFixed(1)}</span>
          <div className={styles.stars}>
            <Stars rating={getAverageRating()} size={24} color='#9484cd'/>
          </div>
        </div>
        <div className={styles.ratingsRecommend} >
          <span> {getRecommendedPercent()}% of reviews recommend this product </span>
        </div>
        <div className={styles.ratingBreakdown}>
          <div className={styles.starsAndBars}>
            <span> 1 star: </span>
            <Bars rating={getRatingCount(1)} totalRatings={getTotalRating()} color="#8374b8" />
          </div>
          <div className={styles.starsAndBars}>
            <span> 2 star: </span>
            <Bars rating={getRatingCount(2)} totalRatings={getTotalRating()} color="#8374b8" />
          </div>
          <div className={styles.starsAndBars}>
            <span> 3 star: </span>
            <Bars rating={getRatingCount(3)} totalRatings={getTotalRating()} color="#8374b8" />
          </div>
          <div className={styles.starsAndBars}>
            <span> 4 star: </span>
            <Bars rating={getRatingCount(4)} totalRatings={getTotalRating()} color="#8374b8" />
          </div>
          <div className={styles.starsAndBars}>
            <span> 5 star: </span>
            <Bars rating={getRatingCount(5)} totalRatings={getTotalRating()} color="#8374b8" />
          </div>
        </div>
        <div className={styles.characteristicBreakdown}>
          {review_meta !== 0 && review_meta !== null ? getCharacteristics().map( (text) => {
            return <div key={text}>{text} </div>;
          }) : <div></div>}
        </div>
      </div>
    );
}


export default Ratings;