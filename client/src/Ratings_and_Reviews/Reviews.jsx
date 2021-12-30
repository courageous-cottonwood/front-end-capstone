import React from 'react';
import DummyReviews from './DummyReviews.js';
import Review from './Review.jsx';
import styles from './RR.module.css';
import axios from 'axios';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: DummyReviews,
    }
    this.getReviews = this.getReviews.bind(this);
  }

  getReviews (productID = 63612) {
    axios.get('/reviews', {
      params: {
        product_id: productID
      }
    })
    .then( (response) => {
      // console.log(response.data);
      this.setState({reviews: response.data});
    });
  }

  componentDidMount () {
    this.getReviews();
  }

  render () {
    // console.log(this.state.reviews);
    var mappedReviews = this.state.reviews.results.map( (review) =>
      <Review review={review} />
    );
    // console.log(mappedReviews);
    return (
      <div className={styles.ReviewsContainer}>
        {mappedReviews}
        <button className={styles.button}> More Reviews</button>
        <button className={styles.button}> Add Review </button>
      </div>

    );
  }

}

export default Reviews;