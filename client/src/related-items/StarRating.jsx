import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stars from '../Utilities/Stars.jsx';
import StarCSS from './cssModules/StarRating.module.css';

const StarRating = (props) => {

  const [rating, setRating] = useState([]);

  useEffect(() => {
    const promises = [];
    const avg = []
    promises.push(axios.get('/reviews/meta', { params: { product_id: props.id } })
      .then((res) => {
        var ratingsObj = res.data.ratings;
        if (Object.keys(ratingsObj).length === 0) {
          avg.push(0);
        } else {
          avg.push(calculateAverage(ratingsObj));
        }
      })
      .catch((err) => {
        console.log(err);
      })
    );
    Promise.all(promises).then(() => {
      setRating(avg);
    });
  }, []);

  const calculateAverage = (ratingsObj) => {
    var average = 0;
    var totalScore = 0;
    var numOfReviews = 0;
    for (let el in ratingsObj) {
      totalScore += Number(el) * Number(ratingsObj[el]);
      numOfReviews += Number(ratingsObj[el]);
    }
    average = totalScore / numOfReviews;
    return average.toFixed(2);
  };

  return (
    <span className={StarCSS.rating}>
      {rating[0] === 0 ?
        <span>
          <h4 className={StarCSS.h4}>No rating yet </h4>
          <Stars rating={rating[0]} size={30} color={'#29283ee9'} />
        </span>
        :
        <span>
          <h4 className={StarCSS.h4}>Average rating: {rating}</h4>
          <Stars rating={rating[0]} size={30} color={'#2f283ee9'} />
        </span>
      }
    </span>
  );
};

export default StarRating;

