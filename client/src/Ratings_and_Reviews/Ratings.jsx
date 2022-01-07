import React, { useState, useEffect } from 'react';
import styles from './RR.module.css';
import axios from 'axios';
import Stars from '../Utilities/Stars.jsx';
import RatingBars from './RatingBars.jsx';
import CharacteristicBars from './CharacteristicBars.jsx';


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

        results.push([charact, charactValue]);
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
        <div className={styles.ratingsRecommend}>
          <span> {getTotalRating()} total reviews </span>
        </div>

        <div className={styles.ratingsRecommend} >
          <span> {getRecommendedPercent()}% of reviews recommend this product </span>
        </div>
        <div className={styles.ratingBreakdown}>
          <div className={styles.starsAndBars}>
            <div className={styles.ratingStarText}>
              <span> 1: ({getRatingCount(1)}) </span>
              <span> 2: ({getRatingCount(2)}) </span>
              <span> 3: ({getRatingCount(3)})</span>
              <span> 4: ({getRatingCount(4)})</span>
              <span> 5: ({getRatingCount(5)})</span>
            </div>
            <div className={styles.ratingBarsContainer}>
            <RatingBars rating={getRatingCount(1)} totalRatings={getTotalRating()} color="#8374b8" />
            <RatingBars rating={getRatingCount(2)} totalRatings={getTotalRating()} color="#8374b8" />
            <RatingBars rating={getRatingCount(3)} totalRatings={getTotalRating()} color="#8374b8" />
            <RatingBars rating={getRatingCount(4)} totalRatings={getTotalRating()} color="#8374b8" />
            <RatingBars rating={getRatingCount(5)} totalRatings={getTotalRating()} color="#8374b8" />
            </div>
          </div>
        </div>
        <div className={styles.characteristicBreakdown}>
          {/* {review_meta !== 0 && review_meta !== null ? getCharacteristics().map( (text) => {
            return <div key={text}>{text} </div>;
          }) : <div></div>} */}
          {review_meta !== 0 && review_meta !== null ? getCharacteristics().map ( (charactAndValue) => {
            return <CharacteristicBars characteristic={charactAndValue[0]} value={charactAndValue[1]} key={charactAndValue[0] + charactAndValue[1]}color="#8374b8"/>
          })
          :
          <div></div>
          }

        </div>
      </div>
    );
}


export default Ratings;