import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import axios from 'axios';
import styles from './RR.module.css';
import DummyReviews from './DummyReviews.js';


const Ratings_and_Reviews = ({product_id}) => {

  const [review_meta, setReviewMeta] = useState(0);
  const [reviews, setReviews] = useState(DummyReviews);
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('newest');

  const getReviewMeta = (productID) => {
    // console.log('get review meta running');
    axios.get('/reviews/meta', {
      params: {
        product_id: productID
      }
    })
    .then( (response) => {
      setReviewMeta(response.data);
    });
  }

  const getReviews = (productID) => {
    axios.get('/reviews', {
      params: {
        product_id: productID, page : 1, count: count, sort: sort,
      }
    })
    .then( (response) => {
      setReviews(response.data);
    });
  }

  const handleMoreQuestions = () => {
    let updatedCount = count + 2;
    setCount(updatedCount);
  }

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  useEffect( () => {
    getReviews(product_id);
  }, [sort]);

  useEffect( () => {
    getReviews(product_id);
  }, [count]);

  useEffect ( () => {
    getReviews(product_id);
  }, [product_id]);

  useEffect ( () => {
    getReviews(product_id);
  }, []);

  useEffect( () => {
    getReviewMeta(product_id);
  }, []);

  useEffect( () => {
    getReviewMeta(product_id);
  }, [product_id]);



  return (
    <div className={styles.ratingsAndReviewsContainer}>
      <Ratings review_meta={review_meta} product_id={product_id}/>
      <Reviews review_meta={review_meta} product_id={product_id} reviews={reviews} handleMoreQuestions={handleMoreQuestions} handleSort={handleSort}/>

    </div>

  );

}


export default Ratings_and_Reviews;