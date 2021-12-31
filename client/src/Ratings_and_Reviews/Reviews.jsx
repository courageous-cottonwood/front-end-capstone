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
      count: 2,
    }
    this.getReviews = this.getReviews.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
  }

  getReviews (productID = 63610) {
    axios.get('/reviews', {
      params: {
        product_id: productID, page : 1, count: this.state.count
      }
    })
    .then( (response) => {
      // console.log(response.data);
      this.setState({reviews: response.data});
    });
  }

  handleMoreQuestions () {
    let count = this.state.count + 2;
    this.setState({count: count}, () => {
      this.getReviews();
    });
  }

  componentDidMount () {
    this.getReviews();
  }

  render () {
    // console.log(this.state.reviews);
    // console.log(mappedReviews);
    return (
      <div className={styles.ReviewsContainer}>
        {this.state.reviews.results.map( (review) =>
          <Review review={review} />
        )}
        <button onClick={this.handleMoreQuestions} className={styles.button}> More Reviews</button>
        <button className={styles.button}> Add Review </button>
      </div>

    );
  }

}

export default Reviews;