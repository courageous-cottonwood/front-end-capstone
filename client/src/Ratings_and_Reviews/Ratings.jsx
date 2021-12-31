import React from 'react';
import styles from './RR.module.css';
import axios from 'axios';
import Stars from '../Utilities/Stars.jsx';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_meta: 0,
    }
    this.getReviewMeta = this.getReviewMeta.bind(this);
    this.getRatingCount = this.getRatingCount.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
  }
  getReviewMeta (productID = 63610) {
    axios.get('/reviews/meta', {
      params: {
        product_id: productID
      }
    })
    .then( (response) => {
      // console.log(response.data);
      this.setState({review_meta: response.data});
    });
  }

  componentDidMount() {
    this.getReviewMeta();
  }

  getRatingCount (star) {
    if(this.state.review_meta !== 0) {
      return this.state.review_meta.ratings[star] || 0;
    }
    return 0;
  }

  getAverageRating () {
    if(this.state.review_meta !== 0) {
      let totalSum = 0;
      let totalReviews = 0;
      let ratings = this.state.review_meta.ratings;
      for(let stars in ratings) {
        totalSum += (parseInt(stars) * parseInt(ratings[stars]));
        totalReviews += parseInt(ratings[stars]);
      }
      return totalSum/totalReviews;
    }
    return 0;
  }

  render () {
    // console.log(this.state.review_meta.ratings);

    return (
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingsNumberAndStarsContainer}>
          <span className={styles.ratingsNumber}>{this.getAverageRating()}</span>
          <div className={styles.stars}>
            <Stars rating={this.getAverageRating()} size={24} color="yellow"/>
          </div>
        </div>
        <div className={styles.ratingBreakdown}>
          <div> 1 star: {this.getRatingCount(1)}</div>
          <div> 2 star: {this.getRatingCount(2)}</div>
          <div> 3 star: {this.getRatingCount(3)}</div>
          <div> 4 star: {this.getRatingCount(4)}</div>
          <div> 5 star: {this.getRatingCount(5)}</div>
        </div>
      </div>
    );
  }
}


export default Ratings;