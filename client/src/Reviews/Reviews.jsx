import React from 'react';
import DummyReviews from './DummyReviews.js';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: DummyReviews,
    }
  }

  render () {
    // console.log(this.state.reviews);
    var mappedReviews = this.state.reviews.results.map( (review) =>
      <Review review={review} />
    );
    // console.log(mappedReviews);
    return (
      <div>
        <div>{mappedReviews}</div>
        <button> More Reviews</button>
        <button> Add Review </button>
      </div>

    );
  }

}

export default Reviews;