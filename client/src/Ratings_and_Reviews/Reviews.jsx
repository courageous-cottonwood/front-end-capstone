import React, { useState, useEffect } from 'react';
import DummyReviews from './DummyReviews.js';
import Review from './Review.jsx';
import styles from './RR.module.css';
import axios from 'axios';
import AddReview from './addReview.jsx';

const Reviews = ({product_id}) => {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     reviews: DummyReviews,
  //     count: 2,
  //   }
  //   this.getReviews = this.getReviews.bind(this);
  //   this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
  // }

  const [reviews, setReviews] = useState(DummyReviews);
  const [count, setCount] = useState(2);

  const getReviews = (productID) => {
    axios.get('/reviews', {
      params: {
        product_id: productID, page : 1, count: count
      }
    })
    .then( (response) => {
      // console.log(response.data);
      // this.setState({reviews: response.data});
      setReviews(response.data);
    });
  }

  const handleMoreQuestions = () => {
    let updatedCount = count + 2;
    // this.setState({count: count}, () => {
    //   this.getReviews();
    // });
    setCount(updatedCount);
  }

  useEffect( () => {
    getReviews(product_id);
  }, [count]);

  useEffect ( () => {
    getReviews(product_id);
  }, [product_id]);

  useEffect ( () => {
    getReviews(product_id);
  }, []);

  // componentDidMount () {
  //   this.getReviews();
  // }

  // render () {
    // console.log(this.state.reviews);
    // console.log(mappedReviews);
    return (
      <div className={styles.ReviewsContainer}>
        {reviews.results.map( (review) =>
          <Review review={review} />
        )}
        <button onClick={handleMoreQuestions} className={styles.button}> More Reviews</button>
        <button className={styles.button}> Add Review </button>
        {/* <AddReview product_id={product_id}/> */}
      </div>

    );
  // }

}

export default Reviews;